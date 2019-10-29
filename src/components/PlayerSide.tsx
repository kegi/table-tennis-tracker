import React from 'react'

interface PlayerSideProps {
  className?: string,
  overlay?: boolean
}

const PlayerSide: React.FC<PlayerSideProps> = (
  {
    children,
    className,
    overlay = false,
  },
) => {

  className = overlay ? `${className} with-overlay` : className

  return (
    <div className={`player-side ${className}`}>
      {overlay && <div className="player-overlay"/>}
      {children}
    </div>
  )
}

export default PlayerSide
