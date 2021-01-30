import React from 'react'
import '../Styles/css/card.css'


function BackCard() {
    return (
        <div className="card-container">
            <div className="back-card-scan"></div>
            <div className="back-seal-portion">
                <div className="back-seal-container">
                    <div className="back-seal"></div>
                    <div>Authorize Signature  &nbsp; &nbsp; Not Valid Unless Sign</div>
                </div>
                <div className="back-seal-text">
                    777
                </div>
            </div>
            <div className="back-number">
                7777777777
            </div>
            <div className="back-bankname-container">
                <div className="bankname-left">
                    <span>Prestige Black </span>
                    <span>Services : 1XBV-GTSR-2REP-BH43 (Bank Name)</span>
                </div>
                <div className="back-logo">Powered By UCARDelite</div>
            </div>
            <div className="back-notice">
                IMPORTANT: it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
            </div>
         

        </div>
    )
}

export default BackCard
