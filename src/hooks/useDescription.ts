import { useContext } from "react";
import { getDishDescription, getDishCalories } from "../utils/requests";
import { AuthContext } from "../context/context";
import { useImageUrl } from "./useImageUrl";
import { descriptionT } from "./types";

export const useDescription = function () {
    const {description, setDescription, file, setImageUrl} = useContext(AuthContext);
    const {startGenerate, setStartGenerate} = useContext(AuthContext);
    const {handleUpload} = useImageUrl();
    
    const generateDescription = async function () {
        setStartGenerate(true);
        // console.log(file);
        // if (imageUrl == "" || imageUrl == null) {
        //     console.log("a")
        //     try {
        //         imageUrl = await handleUpload(file);
        //         const data = await getDishCalories(imageUrl ? imageUrl : "");
        //         console.log(data);
        //         setDescription(data as descriptionT);
        //         setImageUrl(imageUrl ? imageUrl : "");

        //     } catch (err) {
        //         console.log(err)
        //     }
        // } else {
        //     const data = await getDishCalories(imageUrl ? imageUrl : "");
        //     console.log(data);
        //     setDescription(data as descriptionT);
        // }
        const imageUrl = await handleUpload(file);
        const data = await getDishCalories(imageUrl ? imageUrl : "");
        console.log(data);
        setDescription(data as descriptionT);
        setImageUrl(imageUrl ? imageUrl : "");
        setStartGenerate(false);
        // setDescription(data);
    }

    return { description, setDescription, generateDescription, startGenerate }
}