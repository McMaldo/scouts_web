import React from "react";
import "./loading.css";

const Loading = () => {
    return(
        <div className="loadingContainer">
            <div className="loading">
                <svg width="80" height="80" viewBox="0 0 80 80">
                    <circle
                        r="32"
                        cx="40"
                        cy="40"
                        pathLength="100"
                    />
                    <circle
                        r="32"
                        cx="40"
                        cy="40"
                        pathLength="100"
                    />
                </svg>
            </div>
        </div>
    )
}
export default Loading;