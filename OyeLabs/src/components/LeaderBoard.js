import React from 'react'

function LeaderBoard(props) {
  
  return (
    <div className='form'>
      <div className="full"><h2>Leader Board</h2></div>
      <div className="full nova">
          <div className='dp'>
            <span>#1 Sherk</span>
            <span>
              #2 Trailer Park Boys
            </span>
            <span>
              # The Office 
            </span>
          </div>
          <div className='dp'>
            <span>200 points</span>
            <span>
              95 points
            </span>
            <span>
              90 points
            </span>
          </div>
      </div>
    </div>
  )
}

export default LeaderBoard
