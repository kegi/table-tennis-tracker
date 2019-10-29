import React from 'react'

const WaitingForRestart: React.FC = () => {
  return (
    <div className="waiting-for-restart">
      <div>
        <i className="far fa-hand-point-up"/> press any button to start
      </div>
    </div>
  )
}

export default WaitingForRestart
