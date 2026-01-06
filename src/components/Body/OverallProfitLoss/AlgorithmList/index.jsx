import React, { useState } from 'react'
import './AlgorithmList.css'
import SquareOffIcon from '../../../../assets/images/squareOff.svg'
import AlgoNameCountIcon from '../../../../assets/images/algoname-count.png'

function AlgorithmList({ algorithms = [] }) {
  const [selectedRowId, setSelectedRowId] = useState(null)

  const defaultAlgorithms = [
    { id: 1, name: 'Momentum Surge', multiplier: '2X', pnl: '+₹1,50,000', action: 'square-off' },
    { id: 2, name: 'Momentum Surge', multiplier: '2X', pnl: '+₹1,50,000', action: 'view-details' },
    { id: 3, name: 'Momentum Surge', multiplier: '2X', pnl: '+₹1,50,000', action: 'square-off' },
    { id: 4, name: 'Momentum Surge', multiplier: '2X', pnl: '+₹1,50,000', action: 'square-off' },
    { id: 5, name: 'Momentum Surge', multiplier: '2X', pnl: '+₹1,50,000', action: 'square-off' },
    { id: 6, name: 'Momentum Surge', multiplier: '2X', pnl: '+₹1,50,000', action: 'square-off' },
    { id: 7, name: 'Momentum Surge', multiplier: '2X', pnl: '+₹1,50,000', action: 'view-details' },
    { id: 8, name: 'Momentum Surge', multiplier: '2X', pnl: '+₹1,50,000', action: 'square-off' },
    { id: 9, name: 'Momentum Surge', multiplier: '2X', pnl: '+₹1,50,000', action: 'square-off' },
    { id: 10, name: 'Momentum Surge', multiplier: '2X', pnl: '+₹1,50,000', action: 'square-off' }
  ]

  const algorithmsToDisplay = algorithms.length > 0 ? algorithms : defaultAlgorithms

  return (
    <div className="algorithm-list-container">
      <div className="algorithm-list-table">
        <div className="algorithm-list-header">
          <div className="algorithm-list-col">Algo Name</div>
          <div className="algorithm-list-col">Multiplier</div>
          <div className="algorithm-list-col">P&L</div>
          <div className="algorithm-list-col">Action</div>
        </div>
        <div className="algorithm-list-body">
          {algorithmsToDisplay.map((algo, index) => (
            <div 
              key={algo.id || index} 
              className={`algorithm-list-row ${selectedRowId === (algo.id || index) ? 'active' : ''}`}
              onClick={() => setSelectedRowId(algo.id || index)}
            >
              <div className="algorithm-list-col">
                <img src={AlgoNameCountIcon} alt="Algorithm" className="algorithm-list-icon" />
                {algo.name}
              </div>
              <div className="algorithm-list-col">{algo.multiplier}</div>
              <div className={`algorithm-list-col ${algo.pnl && algo.pnl.startsWith('+') ? 'positive' : ''}`}>
                {algo.pnl}
              </div>
              <div className="algorithm-list-col">
                {algo.action === 'view-details' ? (
                  <button 
                    className="algorithm-list-view-details-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Details
                  </button>
                ) : (
                  <button 
                    className="algorithm-list-square-off-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img src={SquareOffIcon} alt="Square off" className="algorithm-list-square-off-icon" />
                    Square-off
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AlgorithmList

