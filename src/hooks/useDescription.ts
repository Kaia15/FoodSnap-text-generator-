import { useContext } from "react";
import { getDishDescription } from "../utils/requests";
import { AuthContext } from "../context/context";

export const useDescription = function () {
    const {description, setDescription} = useContext(AuthContext);
    const {startGenerate, setStartGenerate} = useContext(AuthContext);
    
    const generateDescription = async function (imageUrl: string) {
        setStartGenerate(true);
        const data = await getDishDescription(imageUrl);
        setDescription(data);
    }

    return { description, setDescription, generateDescription, startGenerate }
}