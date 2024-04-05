// Popup.jsx
import React, { useContext } from 'react';
import { PhotoUpload } from './photo';
import { useDish } from '../hooks/useDish';
import { useDescription } from '../hooks/useDescription';
import { useImageUrl } from '../hooks/useImageUrl';
import { AuthContext } from '../context/context';

const Popup = () => {
    const { dish, setDish, submit, handleDateChange, handleNameChange } = useDish();
    const { description, setDescription, generateDescription, startGenerate } = useDescription();
    const { imageUrl, setImageUrl, popNext, setPopNext } = useImageUrl();
    const { openPopup, setOpenPopup } = useContext(AuthContext);

    return (
        <div className='popup'>
            <style>
                {`
            .popup {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: rgba(0, 0, 0, 0.7);
                display: flex;
                justify-content: center;
                align-items: center;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 999;
            }

            .modal {
                background-color: white;
                border-radius: 8px;
                max-width: 50%;
                max-height: 75%;
                overflow: auto;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            .close-btn {
                position: absolute;
                top: 10px;
                right: 10px;
                font-size: 20px;
                cursor: pointer;
            }

            .modal-body {
                text-align: center;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 10px;
            }

            .post-image {
                width: 100%;
                max-width: 500px;
                height: 500px;
                border-radius: 8px;
            }

            .share-button {
                background-color: #0095f6;
                color: white;
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 16px;
            }

            .description-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 10px;
            }

            form {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 10px;
                padding: 10px;
            }

            label {
                font-weight: bold;
            }

            input[type="text"], input[type="date"] {
                padding: 5px;
                border-radius: 5px;
                border: 1px solid #ccc;
                width: 100%;
                maxWidth: 500px;
            }

            button[type="submit"] {
                background-color: #0095f6;
                color: white;
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 16px;
            }

            button[type="button"] {
                background-color: #0095f6;
                color: white;
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 16px;
            }

            .description {
                overflow: scroll;
                max-height: 100px;
                max-width: 
            }
            `}
            </style>
            <span className="close-btn" onClick={() => setOpenPopup(false)}>&times;</span>
            <div className="modal">
                <div className="modal-body" style={{flexDirection: popNext ? "row": "column"}}>
                    <PhotoUpload />
                    <div style={{flex: '1'}}>
                    {popNext && <button onClick={() => setPopNext(false)} type='button'> Back </button>}
                    {popNext && (
                        <div className="description-container">
                            <form onSubmit={submit}>
                                <label htmlFor="name"> Name </label>
                                <input type="text" id="name" onChange={handleNameChange} />
                                <label htmlFor="date"> Date </label>
                                <input type="date" id="date" onChange={handleDateChange} />
                                <button type="button" onClick={() => imageUrl && generateDescription(imageUrl)} disabled={!imageUrl}> Generate dish description by our AI assistant </button>
                                {startGenerate && <p className='description'>{description ? description.message.content : "Loading..."}</p>}
                                <button type='submit'>Post</button>
                            </form>
                        </div>
                    )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Popup;
