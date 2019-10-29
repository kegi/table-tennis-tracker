import React, { useRef, useEffect } from 'react'
import background from '../../assets/videos/background2.mp4'
import winnerBackground from '../../assets/videos/winner.mp4'

interface AnimatedBackgroundProps {
  showWinner?: boolean,
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = (
  {
    showWinner = false,
  },
) => {

  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (showWinner && videoRef && videoRef.current) {
      videoRef.current.play()
    }
  })

  const getClassName = (): string => {
    let className = 'background-video-container'

    if (showWinner) {
      className += ' show-winner'
    }

    return className
  }

  const getVideoSrc = (): string => {
    if (showWinner) {
      return winnerBackground
    }
    return background
  }

  const getLoop = (): boolean => {
    return !showWinner
  }

  return (
    <div className={getClassName()}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop={getLoop()}
        className="background-video"
      >
        <source src={getVideoSrc()} type="video/mp4"/>
      </video>
    </div>
  )
}

export default AnimatedBackground
