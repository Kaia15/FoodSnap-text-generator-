import { useEffect, useContext } from "react";
import { useDescription } from "./useDescription";
import { useImageUrl } from "./useImageUrl";
import { AuthContext } from "../context/context";
import { useCollectionFetch } from "./useCollectionFetch";
import { addNewDish } from "../utils/requests";
import { ChangeEvent } from "react";
import { dishT } from "../utils/types";

export const useDish = function() {
    const {dish,setDish} = useContext(AuthContext);
    const {description} = useDescription();
    const {file,handleUpload} = useImageUrl();
    const {setCollection} = useCollectionFetch();

    useEffect(() => {
        setDish((prevDish) => ({
            ...prevDish,
            imageUrl: "",
            description: description ? description.message.content : "",
        }));
        // console.log(dish);
        // console.log(imageUrl);
    }, [file, description, setDish]);

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setDish((prevDish) => ({ ...prevDish, name: value }));
    };

    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setDish((prevDish) => ({ ...prevDish, date: new Date(value) }));
    };

    const submit = async function (event: React.FormEvent) {
        event.preventDefault();
        // console.log(file);
        try {
            const url = await handleUpload(file);
            // console.log(url);
            const d:dishT = {...dish, imageUrl: url ? url: ""};
            // console.log(d);
            setCollection(prevdata => [...prevdata,d]);
            addNewDish(d);
        } catch (err) {
            console.log(err)
        }
        
    }
    
    return {dish,setDish,submit,handleNameChange,handleDateChange}
}