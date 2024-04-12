import axios from "axios";
import { readFromLS, writeToLS } from "./store";
import { dishT } from "./types";

const apiKey = "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";

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


