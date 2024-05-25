import { useImageUrl } from '../hooks/useImageUrl';
import { useState } from 'react';

export function PhotoUpload() {
    const { file, handleFileChange, handleUpload, imageSrc, popNext,back,setBack} = useImageUrl();
    
    // return (
    //     <div className="post-modal">
    //         <style>
    //         {
    //         `
    //           .post-modal {
    //             width: 100%;
    //             height: 100%;
    //             // position: relative;
    //             background-color: #fff;
    //             // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    //           }

    //           .post-modal-content {
    //             width: 100%;
    //             height: 100%;
    //           }
    
    //           .post-modal-header {
    //             display: flex;
    //             align-items: center;
    //             justify-content: space-between;
    //             margin-bottom: 1rem;
    //             border-bottom: 1px solid #ccc;
    //           }
    
    //           .form-group {
    //             margin-bottom: 1rem;
    //           }
    
    //           .form-group label {
    //             display: block;
    //             font-weight: bold;
    //             margin-bottom: 0.5rem;
    //           }
    
    //           .form-group input[type="file"] {
    //             width: 100%;
    //             border: none;
    //             border-radius: 0.25rem;
    //             background-color: #f5f5f5;
    //             font-size: 1rem;
    //             line-height: 1.5;
    //           }
    
    //           .image-preview {
    //             margin: 12px;
    //             padding: 0px 4px;
    //           }
    
    //           .image-preview img {
    //             max-width: 300px;
    //             max-height: 300px;
    //             border-radius: 0.25rem;
    //           }

    //         `
    //         }
    //         </style>
    //         {/* {!popNext &&
    //             <div>
    //                 <label htmlFor="myFile">Choose a file:</label>
    //                 <input type="file" id="myFile" onChange={handleFileChange} />
    //                 <button type="button" onClick={() => handleUpload(file)}> Next </button>
    //             </div>
    //         }
    //         {imageSrc && <img src={imageSrc} alt="Preview" className='post-image' />} */}
    //         {!popNext && <div className='post-modal-content'>
    //             <div className="post-modal-header">
    //             {/* <span> Upload Image </span> */}
    //             <button type="button" onClick={() => handleUpload(file)} className='next-btn'> Next </button>
    //             {/* <button className="close-button" onClick={onClose}>Close</button> */}
    //             </div>
    //             <label htmlFor="myFile">Choose a file:</label>
    //             <input
    //                 type="file" id="myFile"
    //                 onChange={handleFileChange}
    //                 />
    //         </div>
    //         }
    //         {imageSrc && (
    //             <div className="image-preview">
    //             <img src={imageSrc} alt="" />
    //             </div>
    //         )}
    //     </div>
    // );
    // console.log(back);
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