import { useEffect, useContext } from "react";
import { useDescription } from "./useDescription";
import { useImageUrl } from "./useImageUrl";
import { AuthContext } from "../context/context";
import { useCollectionFetch } from "./useCollectionFetch";
import { addNewDish } from "../utils/requests";
import { ChangeEvent } from "react";

export const useDish = function() {
    const {dish,setDish} = useContext(AuthContext);
    const {description} = useDescription();
    const {imageUrl} = useImageUrl();
    const {setCollection} = useCollectionFetch();

    useEffect(() => {
        setDish((prevDish) => ({
            ...prevDish,
            imageUrl: imageUrl || "",
            description: description ? description.message.content : "",
        }));
        console.log(imageUrl);
    }, [imageUrl, description, setDish]);

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setDish((prevDish) => ({ ...prevDish, name: value }));
    };

    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setDish((prevDish) => ({ ...prevDish, date: new Date(value) }));
    };

    const submit = async function () {
        setCollection(prevdata => [...prevdata,dish]);
        addNewDish(dish);
    }
    
    return {dish,setDish,submit,handleNameChange,handleDateChange}
}