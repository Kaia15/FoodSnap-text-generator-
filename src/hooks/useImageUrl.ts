import { ref, uploadBytes, getDownloadURL, StorageReference } from 'firebase/storage';
import { storage } from '../utils/firebase';
import { useState, ChangeEvent, useContext } from 'react';
import { AuthContext } from '../context/context';

export function useImageUrl() {
    // const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const {imageUrl,setImageUrl, imageSrc, setImageSrc, popNext, setPopNext} = useContext(AuthContext);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const selectedFile = event.target.files[0];
            setFile(selectedFile);
            const reader = new FileReader();
            reader.onload = () => {
                if (typeof reader.result === 'string') {
                  setImageSrc(reader.result);
                }
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleUpload = async (file: File | null) => {
        console.log("Uploading...")
        setPopNext(true);
        if (file) {
            // event.preventDefault(); 
            try {
                const storageRef: StorageReference = ref(storage, '/avatar/' + file.name);

                // Upload file to Firebase Storage
                await uploadBytes(storageRef, file);

                // Get download URL of the uploaded file
                const url: string = await getDownloadURL(storageRef);
                // console.log(url);
                setImageUrl(url);
            } catch (error) {
                console.error('Error uploading photo:', error);
            }
        }
    };
    console.log(imageUrl);
    // console.log(imageSrc);

    // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     await handleUpload(file);
    // };

    return { file, imageUrl, setImageUrl, handleFileChange, handleUpload, imageSrc, popNext, setPopNext }
}