import React from 'react'

interface PlayerNameProps {
  name: string,
}

const PlayerName: React.FC<PlayerNameProps> = ({ name }) => {
  return (
    <div className="player-name">
      {name}
    </div>
  )
}

export default PlayerName
