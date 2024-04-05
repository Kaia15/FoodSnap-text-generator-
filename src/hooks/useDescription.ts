import { descriptionT } from "./types";
import { useContext, useState } from "react";
import { getDishDescription } from "../utils/requests";
import { AuthContext } from "../context/context";

export const useDescription = function () {
    // const [description, setDescription] = useState<descriptionT | null>(null);
    const {description, setDescription} = useContext(AuthContext);
    const {startGenerate, setStartGenerate} = useContext(AuthContext);
    // const imageUrl = "https://scontent.fosu1-1.fna.fbcdn.net/v/t39.30808-6/433234929_18345415012096116_1404160033205117860_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ovuxnrMepL4AX-1Iu7g&_nc_oc=AdgRQDZaQHTyvz6Sv78k17DgR4Eqkp3I9vjD22aUCOTFrGh1Mb98JlVaDiPj4AGg76o&_nc_ht=scontent.fosu1-1.fna&oh=00_AfAv_hc1pM3B8WKoDUAqkdWA_DoSc61NDyrbAvyNjBWMpA&oe=6612974F"

    // console.log(collection);
    const generateDescription = async function (imageUrl: string) {
        setStartGenerate(true);
        const data = await getDishDescription(imageUrl);
        setDescription(data);
    }

    console.log(description);

    return { description, setDescription, generateDescription, startGenerate }
}