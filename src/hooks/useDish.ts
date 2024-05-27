import { useEffect, useContext, useState } from "react";
import { useDescription } from "./useDescription";
import { useImageUrl } from "./useImageUrl";
import { AuthContext } from "../context/context";
import { useCollectionFetch } from "./useCollectionFetch";
import { addDailyIntake, addNewDish, convertDishT2DailyIntakeT } from "../utils/requests";
import { ChangeEvent } from "react";
import { DailyIntakeT, dishT } from "../utils/types";

export const useDish = function() {
    const {dish,setDish} = useContext(AuthContext);
    const {description} = useDescription();
    const {file,handleUpload,imageUrl} = useImageUrl();
    const {setCollection} = useCollectionFetch();
    const [toast, setToast] = useState(false);

    useEffect(() => {
        setDish((prevDish) => ({
            ...prevDish,
            imageUrl: "",
            description: description ? description.content : "",
        }));
        // console.log(dish);
        // console.log(imageUrl);
    }, [file, description, setDish]);

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setDish((prevDish) => ({ ...prevDish, name: value }));
    };

    const handleCaptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setDish((prevDish) => ({ ...prevDish, caption: value }));
    };

    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setDish((prevDish) => ({ ...prevDish, date: new Date(value) }));
    };

    const submit = async function (event: React.FormEvent) {
        event.preventDefault();
        // console.log(file);
        try {
            if (imageUrl == "") {
                const url = await handleUpload(file);
                // console.log(url);
                const d:dishT = {...dish, imageUrl: url ? url: ""};
                const [intake,err]= await convertDishT2DailyIntakeT(d);
                // console.log(err);
                if (err !== "404") {
                    setCollection(prevdata => [...prevdata,d]);
                    addNewDish(d);
                    addDailyIntake(intake);
                } else {
                    setToast(true);
                    setTimeout(() => setToast(false), 500)
                }
                
            } else {
                const url = await handleUpload(file);
                // console.log(url);
                const d:dishT = {...dish, imageUrl: url ? url: ""};
                const [intake,err]= await convertDishT2DailyIntakeT(d);
                // console.log(err);
                if (err !== "404") {
                    setCollection(prevdata => [...prevdata,d]);
                    addNewDish(d);
                    addDailyIntake(intake);
                }
                
            }
            // console.log(d);
            
        } catch (err) {
            console.log(err)
        }
        
    }
    
    return {dish,setDish,submit,handleNameChange,handleDateChange,handleCaptionChange, toast, setToast}
}