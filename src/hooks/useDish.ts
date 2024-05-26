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
    const {file,handleUpload,imageUrl} = useImageUrl();
    const {setCollection} = useCollectionFetch();

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
                setCollection(prevdata => [...prevdata,d]);
                addNewDish(d);
            } else {
                const d:dishT = {...dish, imageUrl: imageUrl ? imageUrl: ""};
                setCollection(prevdata => [...prevdata,d]);
                addNewDish(d);
            }
            // console.log(d);
            
        } catch (err) {
            console.log(err)
        }
        
    }
    
    return {dish,setDish,submit,handleNameChange,handleDateChange}
}