import React from 'react'
import '../Styles/css/card.css'
import {RiVisaLine} from 'react-icons/ri'

function FrontCard() {
    return (
        <div className="card-container">
            <div className="card-portion"></div>
            <div className="card-portion">
                <span className="small-chip"></span>
            </div>
            <div className="card-portion card-number"> 
                <div>7777 7777 7777 7777</div>
                <div>Valid 77/77</div>
            
            </div>
            <div className="card-portion name-type-portion">
                <div>(Name Here)</div>
                <div><RiVisaLine className="card-type-icon"/></div>
            </div>
        </div>
    )
}

export default FrontCard
