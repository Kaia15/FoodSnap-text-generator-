import { dishT } from "../utils/types";
import { descriptionT } from "../hooks/types";

export interface AuthContextType {
    dish: dishT;
    setDish: React.Dispatch<React.SetStateAction<dishT>>;
    imageUrl: string | null;
    setImageUrl: React.Dispatch<React.SetStateAction<string | null>>;
    collection: (dishT | null)[];
    setCollection: React.Dispatch<React.SetStateAction<(dishT | null)[]>>;
    description: descriptionT | null;
    setDescription: React.Dispatch<React.SetStateAction<descriptionT | null>>;
    startGenerate: boolean,
    setStartGenerate: React.Dispatch<React.SetStateAction<boolean>>;
    imageSrc: string | null,
    setImageSrc: React.Dispatch<React.SetStateAction<string | null>>;
    popNext: boolean,
    setPopNext: React.Dispatch<React.SetStateAction<boolean>>;
    openPopup: boolean,
    setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
}