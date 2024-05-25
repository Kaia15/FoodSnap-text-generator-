import { ref, uploadBytes, getDownloadURL, StorageReference } from 'firebase/storage';
import { storage } from '../utils/firebase';
import { ChangeEvent, useContext, useEffect } from 'react';
import { AuthContext } from '../context/context';

export function useImageUrl() {
    
    const {imageUrl,setImageUrl, imageSrc, setImageSrc, popNext, setPopNext, back, setBack, file, setFile} = useContext(AuthContext);

    useEffect(() => {
        if (file) {
            console.log('File state updated:', file);
        }
    }, [file]);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const selectedFile = event.target.files[0];
            setFile(selectedFile);
            console.log(selectedFile);
            const reader = new FileReader();
            reader.onload = () => {
                if (typeof reader.result === 'string') {
                  setImageSrc(reader.result);
                  setBack(true);
                }
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleUpload = async (file: File | null) => {
        console.log("Uploading...")
        console.log(file);
        // setPopNext(true);
        if (file) { 
            try {
                const storageRef: StorageReference = ref(storage, '/avatar/' + file.name);
                // Upload file to Firebase Storage
                await uploadBytes(storageRef, file);
                // Get download URL of the uploaded file
                const url: string = await getDownloadURL(storageRef);
                console.log(url);
                return url;
            } catch (error) {
                console.error('Error uploading photo:', error);
            }
        }
    };

    return { file, imageUrl, setImageUrl, handleFileChange, handleUpload, imageSrc, popNext, setPopNext, back, setBack }
}