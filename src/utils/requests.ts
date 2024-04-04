// import OpenAI from "openai";
// const axios = require("axios");
import axios from "axios";
import { readFromLS } from "./store";

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
                        text: "What’s in this image?",
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
    // console.log(apiKey);
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

export const fetchAllDishes = function () {
    const data = readFromLS();
    return data;
}

// main();

