import axios from "axios";
import { readCollectionFromLS, readDailyIntakeFromLS, writeCollectionToLS, writeDailyIntakeToLS } from "./store";
import { DailyIntakeT, dishT, NutrientT } from "./types";
import {OpenAIClient, AzureKeyCredential } from "@azure/openai";

const ENDPOINT = "https://polite-ground-030dc3103.4.azurestaticapps.net/api/v1"
const API_KEY = "df8877a9-c3be-4410-a72c-37a57de7154e";
const apiKey = "***"

const API_VERSION = "2024-02-01"
const MODEL_NAME = "gpt-4-32k"

const client = new OpenAIClient(ENDPOINT, new AzureKeyCredential(API_KEY));

interface Message {
    role: "user" | "system",
    content: string
}

export const getDishCalories = async function(imageUrl: string) {
    try {
        console.log(imageUrl);
        const MESSAGES: Message[] = [
            {"role": "user", 
            "content": `Include the quantity per serving (grams or ounces) of the dish ${imageUrl} and list a few ingredients as one bullet point 
            and the average calories, carbs, proteins, fibers, 
            and fats. Only return an object-like string: {
                calories: number,
                protein: number,
                carbs: number,
                fat: number,
                fiber: number,
                water: number,
                serving_size: number
            } with NO any additional information`
        }
        ];
        
        const completion = await client.getChatCompletions(MODEL_NAME,MESSAGES);
        
        return completion.choices[0].message;
    } catch (err) {
        console.error("Error:", err);
    }
}

export const getDishDescription = async function (imageUrl: string) {
    let payload = {
        model: "gpt-4-vision-preview",
        messages: [
            {
                role: "user",
                content: [
                    {
                        type: "text",
                        text: "What are the average amounts of protein, carbohydrates, vegetables, and fat, and total calories present in the dish? (maximum 150 words)",
                    },
                    {
                        type: "image_url",
                        image_url: {
                            url: imageUrl,
                        },
                    },
                ],
            },
        ],
        max_tokens: 300,
    };
    
    try {
        const request = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            payload,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${apiKey}`,
                },
            },
        );
        const response = await request.data;
        return response.choices[0];
    } catch (err) {
        console.log(err);
    }
}

export const fecthRandomDish = async function () {
    try {
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
        return response ? response.data["meals"][0] : {};
    } catch (err) {
        console.log(err);
    }
    
}

export const fetchRandomDishes = async function () {
    const requestCalls = 10;
    const data = [];
    for (let i = 0; i < requestCalls; i += 1) {
        const dish = await fecthRandomDish();
        const convertedD = await convert2DishT(dish);
        data.push(convertedD);
    }
    return data;
}

export const fetchAllDishes = async function () {
    const data = await readCollectionFromLS();
    return data;
}

export const fetchLastWeekDishes = async function() {
    const data = await fetchAllDishes();
    const now = new Date();
    const p = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    return data?.filter((post:dishT) => {
        const d = post?.date;
        if (d) return new Date(d) >= p;
        return false;
    });
}

export const fetchAllDailyIntakes = async function () {
    const ddata = await readDailyIntakeFromLS();
    return ddata;
}

export const addNewDish = async function(payload: dishT) {
    const rdata = await readCollectionFromLS();
    rdata.push(payload);
    await writeCollectionToLS(rdata);
}

export const addDailyIntake = async function (payload: DailyIntakeT) {
    const ddata = await readDailyIntakeFromLS();
    let d = false;
    for (const intake of ddata) {
        if (intake["date"] === payload["date"]) {
            Sum2Objects(payload["macronutrients"],intake["macronutrients"]);
            d = true;
            break;
        }
    }
    if (!d) ddata.push(payload);
    await writeDailyIntakeToLS(ddata);
}

export const convert2DishT = async function (d: any) {
    const dish:any = {};
    if (d !== null ) {
        for (const [key, value] of Object.entries(d)) {
            if (key === "strMeal") dish["name"] = value;
            if (key === "strMealThumb") dish["imageUrl"] = value;
            if (key === "strYoutube") dish["caption"] = `View detailed recipe here: ${value};`
        }
    }
    // dish["description"] = "This image shows a plate of mango sticky rice, a traditional Thai dessert. Mango sticky rice is particularly popular in Southeast Asia and is commonly served during the mango season.";
    dish["date"] = Date.now();
    return dish;
    
}

export const convertDishT2DailyIntakeT = async function (d: dishT): Promise<(DailyIntakeT | any)[]> {
    let nutrients = {};
    let error;
    if (d["description"]) {
        try {
            nutrients = JSON.parse(d["description"]);
            if (typeof nutrients !== "object") error = "404";
        } catch (err) {
            console.error("Failed to parse description:", err);
            error = err;
            nutrients = {}; // Set default value in case of error
        }
    }
    let dt = new Date();
    const di: DailyIntakeT = {
        date: d.date ? d.date.toDateString() : dt.toDateString(),
        macronutrients: nutrients as NutrientT
    };
    return [di, error];
}

export const Sum2Objects = function(obj1: NutrientT, obj2: NutrientT):void {
    for (const key in obj1) {
        if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
          const typedKey = key as keyof NutrientT;
          obj2[typedKey] += obj1[typedKey];
        }
    }
}