import { DailyIntakeT, dishT } from "../utils/types";
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
    randomDishes: any,
    setRandomDishes: React.Dispatch<React.SetStateAction<any>>;
    back:boolean,
    setBack:React.Dispatch<React.SetStateAction<any>>;
    file: File | null,
    setFile: React.Dispatch<React.SetStateAction<File | null>>;
    dailyintake: (DailyIntakeT | null)[],
    setDailyIntake: React.Dispatch<React.SetStateAction<(DailyIntakeT | null)[]>>;
}