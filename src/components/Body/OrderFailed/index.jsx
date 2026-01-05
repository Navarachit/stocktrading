import React from 'react'
import CautionIcon from '../../../assets/images/caution.svg'
import './OrderFailed.css'

function OrderFailed() {
  return (
    <div className="order-failed-alert">
      <div className="order-failed-content">
        <img src={CautionIcon} alt="Caution" className="order-failed-icon" />
        <div className="order-failed-text">
          <span className="order-failed-title">Order Failed</span>
          <span className="order-failed-message">Order failed in 3 strategies have failed orders</span>
          <button className="order-failed-view-all-btn">View All</button>
        </div>
      </div>
    </div>
  )
}

export default OrderFailed

