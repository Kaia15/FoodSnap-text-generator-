import React, { useState, createContext, ReactNode } from "react";
import { dishT } from "../utils/types";
import { descriptionT } from "../hooks/types";
import { AuthContextType } from "./types";

const AuthContext = createContext<AuthContextType>({
    dish: { name: "", description: "", date: new Date(), imageUrl: "" },
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
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [dish, setDish] = useState<dishT>({ name: "", description: "", date: new Date(), imageUrl: "" });
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

    return (
        <AuthContext.Provider value={{ dish, setDish, imageUrl, setImageUrl, collection, setCollection, description, setDescription, startGenerate, setStartGenerate, imageSrc, setImageSrc, popNext, setPopNext, openPopup, setOpenPopup, randomDishes, setRandomDishes, back, setBack, file, setFile }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
