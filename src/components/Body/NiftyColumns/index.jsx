import React from 'react'
import './NiftyColumns.css'

function NiftyColumns() {
  const niftyData = [
    {
      name: 'Nifty',
      value: '23,508.40',
      change: '+258.90',
      changePercent: '+1.11%',
      isPositive: true
    },
    {
      name: 'Bank Nifty',
      value: '23,508.40',
      change: '+258.90',
      changePercent: '+1.11%',
      isPositive: true
    },
    {
      name: 'Midcap Nifty',
      value: '23,508.40',
      change: '-258.90',
      changePercent: '-1.11%',
      isPositive: false
    },
    {
      name: 'Nifty500',
      value: '23,508.40',
      change: '+258.90',
      changePercent: '+1.11%',
      isPositive: true
    },
    {
      name: 'INDIA VIX',
      value: '13.78',
      change: '+258.90',
      changePercent: '+1.11%',
      isPositive: true
    }
  ]

  return (
    <div className="nifty-columns-container">
      {niftyData.map((item, index) => (
        <React.Fragment key={index}>
          <div className="nifty-column-item">
            <div className="nifty-column-name">{item.name}</div>
            <div className="nifty-column-content">
              <div className="nifty-column-value">{item.value}</div>
              <div className={`nifty-column-change ${item.isPositive ? 'positive' : 'negative'}`}>
                {item.change} ({item.changePercent})
              </div>
            </div>
          </div>
          {index < niftyData.length - 1 && <div className="nifty-column-divider"></div>}
        </React.Fragment>
      ))}
    </div>
  )
}

export default NiftyColumns

