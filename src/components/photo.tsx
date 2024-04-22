import { useImageUrl } from '../hooks/useImageUrl';

export function PhotoUpload() {
    const { file, handleFileChange, handleUpload, imageSrc, popNext} = useImageUrl();
    
    return (
        <div className="post-modal">
            <style>
            {
            `
              .post-modal {
                width: 100%;
                height: 100%;
                // position: relative;
                background-color: #fff;
                // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              }

              .post-modal-content {
                width: 100%;
                height: 100%;
              }
    
              .post-modal-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 1rem;
                border-bottom: 1px solid #ccc;
              }
    
              .form-group {
                margin-bottom: 1rem;
              }
    
              .form-group label {
                display: block;
                font-weight: bold;
                margin-bottom: 0.5rem;
              }
    
              .form-group input[type="file"] {
                width: 100%;
                border: none;
                border-radius: 0.25rem;
                background-color: #f5f5f5;
                font-size: 1rem;
                line-height: 1.5;
              }
    
              .image-preview {
                margin: 12px;
                padding: 0px 4px;
              }
    
              .image-preview img {
                max-width: 300px;
                max-height: 300px;
                border-radius: 0.25rem;
              }

            `
            }
            </style>
            {/* {!popNext &&
                <div>
                    <label htmlFor="myFile">Choose a file:</label>
                    <input type="file" id="myFile" onChange={handleFileChange} />
                    <button type="button" onClick={() => handleUpload(file)}> Next </button>
                </div>
            }
            {imageSrc && <img src={imageSrc} alt="Preview" className='post-image' />} */}
            {!popNext && <div className='post-modal-content'>
                <div className="post-modal-header">
                {/* <span> Upload Image </span> */}
                <button type="button" onClick={() => handleUpload(file)} className='next-btn'> Next </button>
                {/* <button className="close-button" onClick={onClose}>Close</button> */}
                </div>
                <label htmlFor="myFile">Choose a file:</label>
                <input
                    type="file" id="myFile"
                    onChange={handleFileChange}
                    />
            </div>
            }
            {imageSrc && (
                <div className="image-preview">
                <img src={imageSrc} alt="" />
                </div>
            )}
        </div>
    );
}