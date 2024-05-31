import { useContext, useState } from "react";
import { AuthContext } from "../context/context";

export default function AppearancePopUp() {
    const {theme, setTheme} = useContext(AuthContext);
    return (
        <div className="theme-popup">
            <style>
                {
                `
                .theme-popup {
                    background: white;
                    border-radius: 15px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                    width: 300px;
                    height: 140px;
                    position: fixed;
                    bottom: 20px;
                    left: 28px;
                    display: flex;
                    flex-direction: column;
                }
                
                .theme-popup-header {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    padding: 10px 15px;
                    border-bottom: 1px solid #e0e0e0;
                }

                .theme-popup-header span {
                    text-align: center;
                }
                
                .back-button {
                    background: none;
                    border: none;
                    font-size: 1.5em;
                    cursor: pointer;
                    margin-right: 10px;
                }
                
                .theme-popup-options {
                    flex: 2;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .button-group {
                    width: 75%;
                    height: 100%; /* Ensure it takes up the full height of the options area */
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                }
                
                .theme-option-button {
                    background: #f9f9f9;
                    border: none;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 50px;
                    margin: 0px 8px;
                    width: 50%;
                }
                
                .theme-option-button.active,
                .theme-option-button:hover {
                    background: #e0e0e0;
                }
                
                .theme-option-button .icon {
                    font-size: 1.2em;
                }
                
                .theme-option-button span {
                    font-size: 1em;
                }
                `
                }
            </style>
            <div className="theme-popup-header">
                {/* <button className="back-button">&larr;</button> */}
                <span>Appearance</span>
            </div>
            <div className="theme-popup-options">
                <div className="button-group">
                    <div
                        className={`theme-option-button ${theme === 'light' ? 'active' : ''}`}
                        onClick={() => setTheme('light')}
                    >
                        <span className="icon">&#9728;</span>
                    </div>
                    <div
                        className={`theme-option-button ${theme === 'dark' ? 'active' : ''}`}
                        onClick={() => setTheme('dark')}
                    >
                        <span className="icon">&#9790;</span>
                    </div>
                </div>
            </div>
        </div>

    );
}