import { dishT } from '../utils/types';
import { useCollectionFetch } from "../hooks/useCollectionFetch";
import { useContext } from 'react';
import { AuthContext } from '../context/context';

const Post = (props: dishT) => (
  <div className="news-article">
    <h3 className="news-title">{props.name}</h3>
    <p className="news-source"></p>
    <div className="news-content">{props.description}</div>
    <img src={props.imageUrl ? props.imageUrl : ""} alt="" className="news-image"/>
  </div>
);

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
            .a p {
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
              
              .news-article {
                margin-bottom: 20px;
                padding-bottom: 20px;
                border-bottom: 1px solid #ccc;
              }
              
              .news-title {
                font-weight: bold;
                font-size: 18px;
                margin-top: 0;
              }
              
              .news-source {
                font-size: 14px;
                color: #666;
              }
              
              .news-content {
                font-size: 16px;
                line-height: 1.5;
              }
              
              .news-image {
                width: 100%;
                max-width: 300px;
                margin: 20px auto;
                display: block;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
            `}
        </style>
        <div className='news'>
        <div className='a'>
        <p> Recipes recommended </p>
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
        <p> Your recent meals </p>
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