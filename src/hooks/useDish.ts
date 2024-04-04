import { dishT } from "../utils/types";
import { useState, useEffect, useContext } from "react";
import { FormEvent } from "react";
import { useDescription } from "./useDescription";
import { useImageUrl } from "./useImageUrl";
import { AuthContext } from "../context/context";

export const useDish = function() {
    // const [dish, setDish] = useState<dishT>({name: "", description: "", date: new Date(), imageUrl: ""});
    const {dish,setDish} = useContext(AuthContext);
    const {description, setDescription} = useDescription();
    const {imageUrl, setImageUrl} = useImageUrl();

    useEffect(() => {
        // Update dish state when imageUrl or description changes
        setDish((prevDish) => ({
            ...prevDish,
            imageUrl: imageUrl || "",
            description: description ? description.message.content : "",
        }));
        console.log(imageUrl);
    }, [imageUrl, description]);

    const submit = function () {}

    // console.log(imageUrl);
    console.log(description);
    console.log(dish);
    
    
    return {dish,setDish,submit}
}