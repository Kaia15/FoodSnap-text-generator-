import { useContext, useState } from "react";
import { dishT } from "../utils/types";
import { AuthContext } from "../context/context";

const Post = function (props: dishT) {
  // console.log(typeof props.date)
  let date;
  let random = false;
  if (typeof props.date === "number") {
    let d = new Date(props.date);
    date = d.toDateString();
    random = true;
  } else date = props.date ? new Date(props.date).toDateString(): "";

  const [seeMore, setSeeMore] = useState(false);
  const {theme} = useContext(AuthContext);


  return (
    <div className={`news-article ${theme}`}>
      <style>
        {`
        .news-article {
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 0.5px solid #ccc;
          text-align: left;
        }

        .news-article.light {
          color: black;
        }

        .news-article.dark {
          color: white;
        }
        
        .news-title {
          font-weight: bold;
          font-size: 18px;
          margin-top: 0;
        }
        
        .news-source {
          font-size: 16px; /* Adjust the size as needed */
          color: #B0B0B0; /* Light grey color */
        }
        
        .news-content {
          font-size: 16px;
          line-height: 1.5;
        }

        .news-content.light {
          color: black;
        }

        .news-content-dark {
          color: white;
        }

        .see-more-button {
          color: #333;
          font-size: 14px;
          font-weight: bold;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        
        .nutrient-section {
          font-weight: bold;
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
      <h3 className="news-title">{props.name}</h3>
      <p className="news-source">{date}</p>
      <div className="news-content">{props.caption}</div>
      <img src={props.imageUrl ? props.imageUrl : ""} alt="" className="news-image"/>
      {/* <div className="news-content">
        <p>{!random && <span className='nutrient-section'> Nutrients: </span>}
        {props.description 
              ? (seeMore ? props.description.substring(0, 200) : props.description) 
              : ""
        }
        {!random && (<span className="see-more-button" onClick={() => setSeeMore(!seeMore)}>
            {seeMore ? "see more..." : "see less..."}
          </span>)}
        </p>
      </div> */}
    </div>
  );
  
}

export default Post;