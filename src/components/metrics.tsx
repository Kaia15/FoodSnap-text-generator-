import { useDailyIntake } from "../hooks/useDailyIntake";
import { useDish } from "../hooks/useDish";
import Toast from "./toast";

function MetricTab() {
    const {dailyintake,setDailyIntake} = useDailyIntake();
    const {toast} = useDish();

    return (
        <div className="log-container">
            <style>
                {`
                .log-container {
                    width: 100%;
                    margin: 0 auto;
                  }
                  
                  .log-header {
                    font-size: 18px;
                    margin-bottom: 20px;
                  }
                  
                  .log-entry {
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid #E0E0E0;
                    padding: 10px 0;
                  }
                  
                  .log-icon {
                    font-size: 24px;
                    margin-right: 10px;
                  }
                  
                  .log-details {
                    flex: 1;
                    text-align: left;
                  }
                  
                  .log-title {
                    font-size: 16px;
                    font-weight: bold;
                    margin: 0;
                  }

                  .log-description-section {
                    display: flex;
                    flex-direction: row;
                  }
                  
                  .log-description {
                    font-size: 14px;
                    color: #666;
                    margin: 5px 0 0;
                    border-left: 1px solid #ccc;
                    padding: 0px 4px;
                    flex: 1;
                  }
                  
                  .log-status {
                    font-weight: bold;
                  }
                  
                  .log-status.private {
                    color: #000;
                  }
                  
                  .log-status.public {
                    color: #000;
                  }
                  
                  .log-arrow {
                    font-size: 16px;
                    color: #999;
                    margin: 5px 0px;
                  }
                `}
            </style>
            {/* <h2 className="log-header">Earlier</h2> */}
            {toast && <Toast />}
            {dailyintake?.map(entry => (
                entry && (
                <div className="log-entry">
                    {/* <FaEye className="log-icon" /> */}
                    <div className="log-details">
                        <p className="log-title">{entry["date"]}</p>
                        <div className="log-description-section">
                        <p className="log-description">
                          Total calories: <span className={`log-status`}>{entry["macronutrients"]["calories"]}</span>. 
                        </p>
                        <p className="log-description">
                          Total carbs: <span className={`log-status`}>{entry["macronutrients"]["carbs"]}</span>. 
                        </p>
                        <p className="log-description">
                          Total proteins: <span className={`log-status`}>{entry["macronutrients"]["protein"]}</span>. 
                        </p>
                        <p className="log-description">
                          Total fats: <span className={`log-status`}>{entry["macronutrients"]["fat"]}</span>. 
                        </p>
                        <p className="log-description">
                          Total fibers: <span className={`log-status`}>{entry["macronutrients"]["fiber"]}</span>. 
                        </p>
                        </div>
                    </div>
                    {/* <div className="log-arrow">&gt;</div> */}
                </div>)
            ))}
        </div>
    );
}

export default MetricTab