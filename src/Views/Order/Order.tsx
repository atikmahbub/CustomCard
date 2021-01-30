import React from 'react'
import '../../Styles/css/order.css'
import FrontCard from '../../Components/FrontCard'
import BackCard from '../../Components/BackCard'
import ControlPanel from './ControlPanel'

function Order() {
    return (
        <div className="row order-container">
            <div className="col-md-5">
                <FrontCard/>
                <BackCard/>
            </div>
            <div className="col-md-7">
                <ControlPanel/>
            </div>
        </div>
    )
}

export default Order
