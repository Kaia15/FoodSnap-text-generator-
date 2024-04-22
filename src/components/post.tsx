import { useState } from "react";
import { dishT } from "../utils/types";

export default function Post(props: dishT) {
  const [openDescription, setOpenDescription] = useState<boolean>(false);
  let d = new Date();
  if (props.date) d = new Date(props.date);
  let dstring = `${d.getDay()} / ${d.getMonth()} / ${d.getFullYear()}`

  return (
    <div className="post">
      <style>
        {`
        .post {
          border-bottom: 1px solid #ccc;
          // border-radius: 5px;
          padding: 1rem;
          margin-bottom: 1rem;
        }

        .post-header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        .post-header h3, .post-header p {
          margin: 0px 3px;
        }

        .post-header img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          margin-right: 1rem;
        }

        .post-info {
          float: right;
        }

        .post-content {
          margin-bottom: 1rem;
        }

        .post-image {
          max-width: 300px;
          max-height: 300px;
          border-radius: 5px;
        }

        .post-footer {
          display: flex;
          // justify-content: space-between;
        }

        .post-footer button {
          background-color: #fff;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 0.5rem 1rem;
          cursor: pointer;
          margin: 0px 4px;
        }

        .post-footer button:hover {
          background-color: #f2f2f2;
        }

        .see-more-button, .see-less-button {
          color: #333;
          font-size: 14px;
          font-weight: bold;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        
        .see-more-button:hover {
          background-color: #f5f5f5;
        }

        `}
      </style>
      <div className="post-header">
        {/* <img src={props.imageUrl ? props.imageUrl : ""} alt="" /> */}
        <h3>{props.name}</h3>
        <p>{dstring}</p>
      </div>
      <div className="post-content">
        <p>{props.description ? props.description.substring(0,200) : ""}
        {!openDescription ? (
          <span className="see-more-button" onClick={() => setOpenDescription(true)}>
            ...see more
          </span>
        ) : (
          <span>
          {props.description ? (
            <span>
              {props.description.substring(201) + " "} <span className="see-less-button" onClick={() => setOpenDescription(false)}> see less</span>
            </span>
          ) : (
            <span></span>
          )}
          </span>
        )}


        </p>
        <img src={props.imageUrl ? props.imageUrl : ""} alt="" className="post-image"/>
      </div>
      <div className="post-footer">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
    </div>
  );
}