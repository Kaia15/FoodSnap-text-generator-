export default function Toast() {
    return (
        <div className="container">
            <style>
                {`
                .container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 20px;
                    border-radius: 10px;
                    background-color: #fff;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                  }
                  
                  .buttons {
                    display: flex;
                    gap: 10px;
                  }
                  
                  .decline,
                  .confirm {
                    padding: 10px 20px;
                    border-radius: 5px;
                    border: none;
                    cursor: pointer;
                    font-weight: bold;
                  }
                  
                  .decline {
                    background-color: #eee;
                    color: #333;
                  }
                  
                  .confirm {
                    background-color: #000;
                    color: #fff;
                  }
                `}
            </style>
            <p>
                <b>pemidaingieu</b>
                <br />
                requested to follow you
            </p>
            <div className="buttons">
                <button className="decline">Decline</button>
                <button className="confirm">Confirm</button>
            </div>
        </div>
    );
}