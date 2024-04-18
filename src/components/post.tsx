import { dishT } from "../utils/types";

export default function Post(props: dishT) {
  let d = new Date();
  if (props.date) d = new Date(props.date);
  let dstring = `${d.getDay()} / ${d.getMonth()} / ${d.getFullYear()}`

  return (
    // <div className="Post">
    //   <style>
    //     {`
    //             /* src/components/Post/Post.css */
    //             .Post {
    //               width: 100%;
    //               max-width: 500px;
    //               margin: 12px auto;
    //               background-color: #fff;
    //               border-radius: 5px;
    //               box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    //               overflow: hidden;
    //             }
                
    //             .Post-header {
    //               display: flex;
    //               align-items: center;
    //               padding: 15px;
    //               background-color: #f9f9f9;
    //               border-bottom: 1px solid #eee;
    //             }
                
    //             .Post-user-info {
    //               flex: 1;
    //             }
                
    //             .Post-name {
    //               font-weight: bold;
    //               font-size: 16px;
    //               line-height: 24px;
    //               color: #333;
    //             }
                
    //             .Post-timestamp {
    //               font-size: 14px;
    //               line-height: 20px;
    //               color: #666;
    //             }
                
    //             .Post-image {
    //               width: 100%;
    //               height: 500px;
    //             }
                
    //             .Post-footer {
    //               display: flex;
    //               flex-direction: column;
    //               padding: 15px;
    //             }
                
    //             .Post-caption {
    //               display: flex;
    //               flex-direction: column;
    //             }
                
    //             .Post-text {
    //               font-size: 14px;
    //               line-height: 20px;
    //               color: #666;
    //             }
    //             `}
    //   </style>
    //   <div className="Post-header">
    //     <div className="Post-user-info">
    //       <div className="Post-name">{props.name}</div>
    //       <div className="Post-timestamp"> {dstring} </div>
    //     </div>
    //   </div>
    //   <img src={props.imageUrl ? props.imageUrl : ""} alt="Post" className="Post-image" />
    //   <div className="Post-footer">
    //     <div className="Post-caption">
    //       <div className="Post-text">{props.description}</div>
    //     </div>
    //   </div>
    // </div>
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
          // margin-bottom: 1rem;
        }

        .post-header img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          margin-right: 1rem;
        }

        .post-info {
          margin-left: 1rem;
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
          justify-content: space-between;
        }

        .post-footer button {
          background-color: #fff;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 0.5rem 1rem;
          cursor: pointer;
        }

        .post-footer button:hover {
          background-color: #f2f2f2;
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
        
        .see-more-button:hover {
          background-color: #f5f5f5;
        }

        `}
      </style>
      <div className="post-header">
        {/* <img src={props.imageUrl ? props.imageUrl : ""} alt="" /> */}
        <h3>{props.name}</h3>
          <p>{dstring}</p>
        {/* <div className="post-info">
          <h3>{props.name}</h3>
          <p>{dstring}</p>
        </div> */}
      </div>
      <div className="post-content">
        <p>{props.description ? props.description.substring(0,200) : ""}
          <span className="see-more-button">
            ...see more
          </span>
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