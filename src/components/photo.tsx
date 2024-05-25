import { useImageUrl } from '../hooks/useImageUrl';

export function PhotoUpload() {
    const { file, handleFileChange, handleUpload, imageSrc, back,setBack} = useImageUrl();
    
    return (
      <div className="upload-container">
      <style>
        {`
        /* UploadPost.css */
        .upload-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 50vh;
          width: 40vw;
          background-color: #fff;
          border-radius: 10px;
        }

        
        h1 {
          font-size: 18px;
          font-weight: 500;
        }

        .upload-box-title {
          display: flex;
          flex-direction: row;
          width: 100%;
          flex: 1;
        }

        .upload-box-t {
          flex: 1;
          text-align: center;
        }
        
        .upload-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 2px dashed #ccc;
          border-radius: 10px;
          flex: 8;
          width: 90%;
          text-align: center;
        }
        .upload-image {
          max-width: 400px;
          max-height: 300px;
          border-radius: 0.25rem;
        }
        
        .upload-icon {
          margin-bottom: 20px;
        }
        
        .upload-icon svg {
          margin: 0 10px;
          color: #555;
        }
        
        p {
          font-size: 16px;
          margin-bottom: 20px;
          color: #555;
        }
        
        .upload-button {
          background-color: #0095f6;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 16px;
          border-radius: 5px;
          cursor: pointer;
        }
        
        .upload-button:hover {
          background-color: #007bb5;
        }        
        `}
      </style>
      <div className='upload-box-title'>
        {back ? <div className='upload-box-t' onClick={() => setBack(false)}> ← </div> : <div className='upload-box-t'>Create new post</div>}
        {back && <div className='upload-box-t' onClick={() => handleUpload(file)}>
          Next
        </div>}
      </div>
      {back ? <img src={imageSrc ? imageSrc : ""} alt="Preview" className='upload-image' /> : 
      <div className="upload-box">
      <p>Drag photos and videos here</p>
      <button className="upload-button">
        <label htmlFor="myFile">Select from computer</label>
        <input
          type="file"
          id="myFile"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </button>
    </div>
    } 
    </div>
    )
}