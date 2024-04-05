    // Popup.jsx
    import React from 'react';
    import { PhotoUpload } from './photo';
    import { useDish } from '../hooks/useDish';
    import { useDescription } from '../hooks/useDescription';
    import { useImageUrl } from '../hooks/useImageUrl';

    const Popup = () => {
        const { dish, setDish, submit, handleDateChange, handleNameChange } = useDish();
        const { description, setDescription, generateDescription, startGenerate } = useDescription();
        const { imageUrl, setImageUrl, popNext, setPopNext } = useImageUrl();

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
                padding: 20px;
                max-width: 90%;
                max-height: 90vh;
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
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
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
            `}
    </style>
                <span className="close-btn">&times;</span>
                <div id="post-modal" className="modal">
                    
                        <div className="modal-body">
                            <PhotoUpload />
                            {popNext && <button onClick={() => setPopNext(false)} type='button'> Back </button>}
                            {popNext && (
                                <div className="description-container">
                                    <form onSubmit={submit}>
                                        <label htmlFor="name"> Name </label>
                                        <input type="text" id="name" onChange={handleNameChange} />
                                        <label htmlFor="date"> Date </label>
                                        <input type="date" id="date" onChange={handleDateChange} />
                                        <button type="button" onClick={() => imageUrl && generateDescription(imageUrl)} disabled={!imageUrl}> Generate dish description by our AI assistant </button>
                                        {startGenerate && <p className='modal-form'>{description ? description.message.content : "Loading..."}</p>}
                                        <button type='submit'>Post</button>
                                    </form>
                                </div>
                            )}
                        </div>
                    
                </div>
            </div>
        );
    };

    export default Popup;
