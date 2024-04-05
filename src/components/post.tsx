import { dishT } from "../utils/types";

export default function Post(props: dishT) {
    return (
        <div className="Post">
            <style>
                {`
                /* src/components/Post/Post.css */
                .Post {
                  width: 100%;
                  max-width: 500px;
                  margin: 12px auto;
                  background-color: #fff;
                  border-radius: 5px;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                  overflow: hidden;
                }
                
                .Post-header {
                  display: flex;
                  align-items: center;
                  padding: 15px;
                  background-color: #f9f9f9;
                  border-bottom: 1px solid #eee;
                }
                
                .Post-user-info {
                  flex: 1;
                }
                
                .Post-name {
                  font-weight: bold;
                  font-size: 16px;
                  line-height: 24px;
                  color: #333;
                }
                
                .Post-timestamp {
                  font-size: 14px;
                  line-height: 20px;
                  color: #666;
                }
                
                .Post-image {
                  width: 100%;
                  height: 500px;
                }
                
                .Post-footer {
                  display: flex;
                  flex-direction: column;
                  padding: 15px;
                }
                
                .Post-caption {
                  display: flex;
                  flex-direction: column;
                }
                
                .Post-text {
                  font-size: 14px;
                  line-height: 20px;
                  color: #666;
                }
                `}
            </style>
          <div className="Post-header">
            <div className="Post-user-info">
              <div className="Post-name">{props.name}</div>
              <div className="Post-timestamp">9 minutes ago</div>
            </div>
          </div>
          <img src={props.imageUrl ? props.imageUrl : ""} alt="Post" className="Post-image" />
          <div className="Post-footer">
            <div className="Post-caption">
              <div className="Post-text">{props.description}</div>
            </div>
          </div>
        </div>
      );
}