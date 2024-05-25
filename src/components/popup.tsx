import { useContext } from 'react';
import { PhotoUpload } from './photo';
import { useDish } from '../hooks/useDish';
import { useImageUrl } from '../hooks/useImageUrl';
import { AuthContext } from '../context/context';

const Popup = () => {
    const { submit, handleNameChange, dish } = useDish();
    // const { description, generateDescription, startGenerate } = useDescription();
    const { back, setBack, imageSrc, file } = useImageUrl();
    const { setOpenPopup } = useContext(AuthContext);

    console.log(dish);
    console.log(file);

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
                .close-btn {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    font-size: 32px;
                    cursor: pointer;
                    color: white;
                }
                .create-post-container {
                    display: flex;
                    flex-direction: column;
                    height: 50%;
                    background-color: #fff;
                    border-radius: 10px;
                  }
                  
                  .header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px 20px;
                    border-bottom: 1px solid #dbdbdb;
                  }
                  
                  .header h1 {
                    font-size: 16px;
                    font-weight: 500;
                  }
                  
                  .back-button, .share-button {
                    background: none;
                    border: none;
                    font-size: 16px;
                    cursor: pointer;
                  }
                  
                  .content {
                    display: flex;
                    height: calc(100% - 50px);
                  }
                  
                  .image-section {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                  }
                  
                  .image-section img {
                    max-width: 100%;
                    max-height: 100%;
                  }
                  
                  .tag-photo {
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    background-color: rgba(0, 0, 0, 0.7);
                    color: #fff;
                    padding: 5px 10px;
                    border-radius: 5px;
                    font-size: 14px;
                  }
                  
                  .details-section {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    padding: 20px;
                    border-left: 1px solid #dbdbdb;
                  }
                  
                  .user-info {
                    display: flex;
                    align-items: center;
                    margin-bottom: 10px;
                  }
                  
                  .user-avatar {
                    border-radius: 50%;
                    margin-right: 10px;
                  }
                  
                  .username {
                    font-weight: 600;
                  }
                  
                  .caption-input {
                    width: 100%;
                    height: 100px;
                    border: none;
                    resize: none;
                    outline: none;
                    font-size: 16px;
                  }
                  
                  .extra-info {
                    margin-top: auto;
                  }
                  
                  .char-count {
                    text-align: right;
                    font-size: 12px;
                    color: #999;
                  }
                  
                  .location-section {
                    margin-top: 10px;
                  }
                  
                  .location-button {
                    background: none;
                    border: none;
                    color: #0095f6;
                    cursor: pointer;
                    font-size: 14px;
                  }
                  
                  .settings-section details {
                    margin-top: 10px;
                  }
                  
                  .settings-section summary {
                    cursor: pointer;
                    font-size: 14px;
                    font-weight: 600;
                  }
                  
                  .settings-section p {
                    font-size: 14px;
                    color: #999;
                    margin: 5px 0 0 10px;
                  }
                `}
                </style>
        <span className="close-btn" onClick={() => setOpenPopup(false)}>&times;</span>
        {back ? 
        <form className="create-post-container" onSubmit={submit}>
          <div className="header">
            <button className="back-button" onClick={() => setBack(false)}>←</button>
            <h1>Create new post</h1>
            <button className="share-button" type='submit'>Share</button>
          </div>
          <div className="content">
            <div className="image-section">
              <img
                src={imageSrc ? imageSrc : ""}
                alt="Upload Preview"
              />
              {/* <div className="tag-photo">Click photo to tag people</div> */}
            </div>
            <div className="details-section">
              {/* <div className="user-info">
                <img
                  src="https://via.placeholder.com/50"
                  alt="User Avatar"
                  className="user-avatar"
                />
                <span className="username">t_trannna</span>
              </div> */}
              <input
                type='text'
                className="caption-input"
                placeholder="Write a name..."
                id='name'
                onChange={handleNameChange}
              />
              <div className="extra-info">
                {/* <div className="char-count">{caption.length}/2,200</div> */}
                <div className="location-section">
                  <button className="location-button">Add location</button>
                </div>
                <div className="settings-section">
                  <details>
                    <summary>Accessibility</summary>
                    <p>Accessibility settings go here.</p>
                  </details>
                  <details>
                    <summary>Advanced settings</summary>
                    <p>Advanced settings go here.</p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </form> : <PhotoUpload />}
        </div>
      );
};

export default Popup;