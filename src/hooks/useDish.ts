import { useEffect, useContext } from "react";
import { useDescription } from "./useDescription";
import { useImageUrl } from "./useImageUrl";
import { AuthContext } from "../context/context";
import { useCollectionFetch } from "./useCollectionFetch";
import { addNewDish } from "../utils/requests";
import { ChangeEvent } from "react";

export const useDish = function() {
    // const [dish, setDish] = useState<dishT>({name: "", description: "", date: new Date(), imageUrl: ""});
    const {dish,setDish} = useContext(AuthContext);
    const {description, setDescription} = useDescription();
    const {imageUrl, setImageUrl} = useImageUrl();
    const {collection, setCollection} = useCollectionFetch();

    useEffect(() => {
        // Update dish state when imageUrl or description changes
        setDish((prevDish) => ({
            ...prevDish,
            imageUrl: imageUrl || "",
            description: description ? description.message.content : "",
        }));
        console.log(imageUrl);
    }, [imageUrl, description]);

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

    // console.log(imageUrl);
    // console.log(description);
    // console.log(dish);
    console.log(collection);
    
    return {dish,setDish,submit,handleNameChange,handleDateChange}
}