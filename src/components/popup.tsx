import React, { useState, ChangeEvent } from 'react';
import { PhotoUpload } from './photo';
import { useDish } from '../hooks/useDish';
import { useDescription } from '../hooks/useDescription';
import { useImageUrl } from '../hooks/useImageUrl';

const Popup = () => {
    const { dish, setDish, submit } = useDish();
    const { description, setDescription, generateDescription, startGenerate } = useDescription();
    const {imageUrl, setImageUrl} = useImageUrl();

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setDish((prevDish) => ({ ...prevDish, name: value }));
    };

    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setDish((prevDish) => ({ ...prevDish, date: new Date(value) }));
    };

    return (
        <div>
            <form onSubmit={submit}>
                <label htmlFor="name"> Name </label>
                <input type="text" id="name" onChange={handleNameChange} />
                <label htmlFor="date"> Date </label>
                <input type="date" id="date" onChange={handleDateChange} />
                <PhotoUpload />
                <button type="button" onClick={() => imageUrl && generateDescription(imageUrl)} disabled={!imageUrl}> Generate dish description by our AI assistant </button>
                {startGenerate && <p>{description ? description.message.content : "Loading..."}</p>}
                <button type='submit'>Post</button>
            </form>
        </div>
    );
};

export default Popup;
