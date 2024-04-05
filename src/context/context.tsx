import React, { useContext, useState, useEffect, createContext, ReactNode } from "react";
import { dishT } from "../utils/types";
import { descriptionT } from "../hooks/types";

interface AuthContextType {
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
    setOpenPopup: () => {}
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [dish, setDish] = useState<dishT>({ name: "", description: "", date: new Date(), imageUrl: "" });
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [collection, setCollection] = useState<(dishT | null)[]>([]);
    const [description, setDescription] = useState<descriptionT | null>(null);
    const [startGenerate, setStartGenerate] = useState<boolean>(false);
    const [imageSrc, setImageSrc] = React.useState<string | null>(null);
    const [popNext, setPopNext] = useState<boolean>(false);
    const [openPopup, setOpenPopup] = useState<boolean>(false);

    return (
        <AuthContext.Provider value={{ dish, setDish, imageUrl, setImageUrl, collection, setCollection, description, setDescription, startGenerate, setStartGenerate, imageSrc, setImageSrc, popNext, setPopNext, openPopup, setOpenPopup }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
