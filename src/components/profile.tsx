import MetricTab from "./metrics";
import Tab from "./tab";
import logo from "../images/logo.png";

export default function Profile () {
    return (
        <div className="profile-container">
        <div className="profile-wrapper">
            <style>
                {`
                .profile-container {
                    flex: 11;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }
                
                .profile-wrapper {
                    border-radius: 10px;
                    padding: 20px;
                    width: 60%;
                    text-align: center;
                    border: 1px solid #ccc;
                    margin: 12px 0px;
                }
                  
                  .profile-header {
                    font-size: 20px;
                    margin-bottom: 20px;
                  }
                  
                  .profile-card {
                    display: flex;
                    flex-direction: row;
                    // align-items: center;
                    margin-bottom: 20px;
                  }
                  
                  .profile-image {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    margin-bottom: 10px;
                    flex: 1;
                  }
                  
                  .profile-info {
                    text-align: left;
                    margin-bottom: 20px;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                  }
                  
                  .profile-name {
                    font-size: 18px;
                    font-weight: bold;
                    margin: 0;
                  }
                  
                  .profile-username {
                    font-size: 14px;
                    color: #AAAAAA;
                    margin: 0;
                  }
                  
                  .profile-location {
                    font-size: 14px;
                    margin: 10px 0;
                  }
                  
                  .profile-followers {
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                  }
                  
                  .follower-icon {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    margin-right: 5px;
                  }
                  
                  .edit-profile-btn {
                    border: 1px solid #ccc;
                    padding: 10px;
                    border-radius: 5px;
                    cursor: pointer;
                    width: 50%;
                    margin: 8px 0px;
                  }
                  
                  .profile-nav {
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid #ccc;
                    margin-bottom: 16px;
                  }
                  
                  .nav-btn {
                    border: none;
                    padding: 10px;
                    flex: 1;
                    cursor: pointer;
                  }
                  
                  .nav-btn:first-child {
                    margin-left: 0;
                  }
                  
                  .nav-btn:last-child {
                    margin-right: 0;
                  }
                `}
            </style>
          {/* <header className="profile-header">Profile</header> */}
          <div className="profile-card">
            <div className="profile-info">
              <h1 className="profile-name">Your own diary</h1>
              <p className="profile-username"></p>
              <p className="profile-location">where you track your metrics</p>
              <div className="profile-followers">
                {/* <div className="follower-icon" /> */}
                <span>5+ posts last week</span>
              </div>
              {/* <button className="edit-profile-btn">Edit profile</button> */}
            </div>
            {/* <img src={logo} alt="" className="profile-image" /> */}
          </div>
          <nav className="profile-nav">
            <button className="nav-btn">Posts</button>
            <button className="nav-btn">Metrics</button>
            <button className="nav-btn">Saved</button>
          </nav>
          <MetricTab />
          {/* <Tab /> */}
        </div>
        </div>
      );
}