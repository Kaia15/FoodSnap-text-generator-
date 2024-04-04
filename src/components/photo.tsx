import { useImageUrl } from '../hooks/useImageUrl';

export function PhotoUpload() {
    const { file, handleFileChange, handleUpload} = useImageUrl();
    // console.log(imageUrl);

    return (
        <div>
            <label htmlFor="myFile">Choose a file:</label>
            <input type="file" id="myFile" onChange={handleFileChange} />
            <button type = "button" onClick={() => handleUpload(file)}>Upload</button>
        </div>
    );
}