import { useImageUrl } from '../hooks/useImageUrl';

export function PhotoUpload() {
    const { file, handleFileChange, handleUpload, imageSrc, popNext} = useImageUrl();
    // console.log(imageUrl);

    return (
        <div className="photo-upload-container">
            <style>
            {`
            .photo-upload-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin-top: 10px;
                width: 100%;
                flex: 1;
            }
            
            .post-image {
                width: 100%;
                max-width: 500px;
                height: 400px;
                border-radius: 8px;
                margin: 20px 0px;
            }
            `}
            
            </style>
            {!popNext &&
                <div>
                    <label htmlFor="myFile">Choose a file:</label>
                    <input type="file" id="myFile" onChange={handleFileChange} />
                    <button type="button" onClick={() => handleUpload(file)}> Next </button>
                </div>
            }
            {imageSrc && <img src={imageSrc} alt="Preview" className='post-image' />}
        </div>
    );
}