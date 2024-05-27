import { dishT } from '../utils/types';
import { useCollectionFetch } from "../hooks/useCollectionFetch";
import { useContext, useState } from 'react';
import { AuthContext } from '../context/context';
import Post from './post';
  

const Posts = () => {
    const {collection,randomDishes} = useCollectionFetch();
    const {startGenerate} = useContext(AuthContext);
  
    // console.log(collection);
    // console.log(randomDishes);

    return (
    <div className='news-parent'>
        <style>
            {`
            .news-parent {
              flex: 11;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .news {
              display: flex;
              flex-direction: row;
              margin: 20px;
              width: 75%;
            }
            .a {
              flex: 1;
            }
            .a-title {
              margin: 20px;
              font-size: 18px;
              font-weight: bold;
              color: #333;
              margin-bottom: 10px;
            }
            .app-container {
              max-width: 800px;
              margin: 20px;
              padding: 20px;
              border: 1px solid #ddd;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              border-radius: 10px;
            }
            `}
        </style>
        <div className='news'>
          <div className='a'>
            <p className='a-title'> Recipes for you </p>
            <div className='app-container'>
              {randomDishes?.map((dish:dishT) => {
                return (
                  <Post {...dish as dishT} />
                )
              })}
            </div>
          </div>

          {collection.length > 0 && 
          <div className='a'>
            <p className='a-title'> Your last meals </p>
            <div className='app-container'>
              {collection?.map((dish) => {
                return (
                  <Post {...dish as dishT} />
                )
              })}
            </div>
          </div>}
        </div>
    </div>
  );
};

export default Posts;