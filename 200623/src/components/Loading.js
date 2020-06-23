import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Spinner() {
    return (
        <div className="loading">
            <FontAwesomeIcon icon="spinner" className="icon" spin />
        </div>
    );
}

export default Spinner;