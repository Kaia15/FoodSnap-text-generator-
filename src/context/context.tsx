import React, { useState, createContext, ReactNode } from "react";
import { DailyIntakeT, dishT } from "../utils/types";
import { descriptionT } from "../hooks/types";
import { AuthContextType } from "./types";

const AuthContext = createContext<AuthContextType>({
    dish: { name: "", description: "", date: new Date(), imageUrl: "", caption: ""},
    setDish: () => {},
    imageUrl: null,
    setImageUrl: () => {},
    collection: [],
    setCollection: () => {},
    description: null,
    setDescription: () => {},
    startGenerate: false,
    setStartGenerate: () => {},
    imageSrc: null,
    setImageSrc: () => {},
    popNext: false,
    setPopNext: () => {},
    openPopup: false,
    setOpenPopup: () => {},
    randomDishes: [],
    setRandomDishes: () => {},
    back:false,
    setBack: () => {},
    file: null,
    setFile: () => {},
    dailyintake: [],
    setDailyIntake: () => {},
    theme: "light",
    setTheme: () => {},
    openAppearance: false,
    setOpenAppearance: () => {}
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [dish, setDish] = useState<dishT>({ name: "", description: "", date: new Date(), imageUrl: "", caption: ""});
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [collection, setCollection] = useState<(dishT | null)[]>([]);
    const [description, setDescription] = useState<descriptionT | null>(null);
    const [startGenerate, setStartGenerate] = useState<boolean>(false);
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [popNext, setPopNext] = useState<boolean>(false);
    const [openPopup, setOpenPopup] = useState<boolean>(false);
    const [randomDishes, setRandomDishes] = useState([]);
    const [back,setBack] = useState<boolean>(false);
    const [file, setFile] = useState<File | null>(null);
    const [dailyintake, setDailyIntake] = useState<(DailyIntakeT | null)[]>([]);
    const [theme, setTheme] = useState<string>("light");
    const [openAppearance, setOpenAppearance] = useState<boolean>(false);

    return (
        <AuthContext.Provider value=
        {{ dish, setDish, imageUrl, setImageUrl, collection, setCollection, description, setDescription, 
        startGenerate, setStartGenerate, imageSrc, setImageSrc, popNext, setPopNext, openPopup, 
        setOpenPopup, randomDishes, setRandomDishes, back, setBack, file, setFile, dailyintake, setDailyIntake,
        theme, setTheme,
        openAppearance, setOpenAppearance }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
