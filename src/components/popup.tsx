import { useContext } from 'react';
import { PhotoUpload } from './photo';
import { useDish } from '../hooks/useDish';
import { useDescription } from '../hooks/useDescription';
import { useImageUrl } from '../hooks/useImageUrl';
import { AuthContext } from '../context/context';

const Popup = () => {
    const { submit, handleDateChange, handleNameChange } = useDish();
    const { description, generateDescription, startGenerate } = useDescription();
    const { imageUrl, popNext, setPopNext } = useImageUrl();
    const { setOpenPopup } = useContext(AuthContext);

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
                    max-width: 50%;
                    max-height: 75%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .close-btn {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    font-size: 32px;
                    cursor: pointer;
                    color: white;
                }

                .modal-body {
                    text-align: center;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 4px;
                }

                .modal-wrapper {
                    background-color: white;
                    display: flex;
                    gap: 4px;
                    flex-direction: column;
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

                form {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                    padding: 10px;
                }

                label {
                    font-weight: bold;
                    text-align: left;
                    margin-left: 4px;
                }

                input[type="text"], input[type="date"] {
                    padding: 5px;
                    border-radius: 5px;
                    border: 1px solid #ccc;
                    width: 75%;
                }

                button[type="submit"] {
                    background-color: black;
                    color: white;
                    padding: 4px 16px;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 14px;
                    font-weight: bold;
                }

                button[type="button"] {
                    background-color: #B2B2B2;
                    color: white;
                    padding: 4px 16px;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 14px;
                    font-weight: bold;
                    margin: 4px;
                    max-width: 50%;
                }

                .description {
                    overflow-y: scroll;
                    max-height: 100px;
                    max-width: 75%;
                    float: center;
                }

                .input-area {
                    padding: 4px;
                }

                .description-wrapper, .button-group {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            `}
            </style>
            <span className="close-btn" onClick={() => setOpenPopup(false)}>&times;</span>
            <div className="modal">
                <div className="modal-body">
                    {popNext && (
                        <form className='modal-wrapper' onSubmit={submit}>
                            <div>
                            <button onClick={() => setPopNext(false)} type='button'> back </button>
                            <button type='submit'>Post</button>
                            </div>
                            <div>
                                <label htmlFor="name"> Name </label>
                                <span> <input type="text" id="name" onChange={handleNameChange} /> </span>
                            </div>
                            <div>
                                <label htmlFor="date"> Date </label>
                                <input type="date" id="date" onChange={handleDateChange} />
                            </div>
                            <div className='button-group'>
                            <button type="button" onClick={() => imageUrl && generateDescription(imageUrl)} disabled={!imageUrl}> Estimate calories & nutrients by our bot </button>
                            </div>
                            <div className='description-wrapper'>
                            {startGenerate && <p className='description'>{description ? description.message.content : "Loading..."}</p>}
                            </div>
                        </form>
                    )}
                    <PhotoUpload />
                </div>

            </div>
        </div>
    );
};

export default Popup;