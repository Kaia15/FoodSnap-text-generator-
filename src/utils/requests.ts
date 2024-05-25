import axios from "axios";
import { readFromLS, writeToLS } from "./store";
import { dishT } from "./types";

const apiKey = "***";

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
    const data = await readFromLS();
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

export const addNewDish = async function(payload: dishT) {
    const rdata = await readFromLS();
    rdata.push(payload);
    await writeToLS(rdata);
}

export const convert2DishT = async function (d: any) {
    const dish:any = {};
    if (d !== null ) {
        for (const [key, value] of Object.entries(d)) {
            if (key === "strMeal") dish["name"] = value;
            if (key === "strMealThumb") dish["imageUrl"] = value;
        }
    }
    dish["description"] = "This image shows a plate of mango sticky rice, a traditional Thai dessert. Mango sticky rice is particularly popular in Southeast Asia and is commonly served during the mango season.";
    dish["date"] = Date.now();
    return dish;
    
}
