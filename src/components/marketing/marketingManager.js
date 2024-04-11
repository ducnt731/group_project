import React, { useState } from "react"
import "../../style/marketingDownload.css"
import { BiSolidDownvote } from "react-icons/bi";

const MarketingManager = () => {

    const getFile = () => {
        
    }

    return(
        <div className="download-container">
            <div className="download-body">
                <div className="download-title">
                    <h2>Download all file here</h2>
                </div>
                <BiSolidDownvote/>
                <div className="but">
                    <button className="btn btn-primary"><i className="fa-solid fa-download"></i> Download All</button>
                </div>
            </div>
        </div>
    )
}

export default MarketingManager