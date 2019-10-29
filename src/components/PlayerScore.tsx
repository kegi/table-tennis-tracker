import React, { useState, useEffect } from 'react'

interface PlayerScoreProps {
  score: number | string,
}

const animationSpeed = 750

const PlayerScore: React.FC<PlayerScoreProps> = ({ score = 0 }) => {
  const [nextScore, setNextScore] = useState<number | string | null>(null)
  const [currentScore, setCurrentScore] = useState<number | string | null>(
    score)
  const [animating, setAnimating] = useState<boolean>(false)

  let animationTimeout: ReturnType<typeof setTimeout> | undefined

  useEffect(() => {
    if (score === currentScore && nextScore === null) {
      return
    }

    if (
      currentScore !== null &&
      (
        typeof score !== 'number' ||
        typeof currentScore !== 'number' ||
        score !== currentScore + 1
      )
    ) {

      /* skip animation for non-sequential changes */

      setCurrentScore(score)
      setNextScore(null)
      setAnimating(false)
      return
    }

    setNextScore(score)
    setAnimating(true)

    animationTimeout = setTimeout(() => {
      animationTimeout = undefined

      setCurrentScore(score)
      setNextScore(null)
      setAnimating(false)
    }, animationSpeed)

    return () => {
      if (animationTimeout !== undefined) {
        clearTimeout(animationTimeout)
        animationTimeout = undefined
      }
    }
  }, [score])

  const getPlayerScoreClassName = (score: number | string | null) => (
    `player-score ${typeof score === 'string' ? ' score-string' : ''}`
  )

  return (
    <div className="player-score-container">
      <div className="player-score-black-box">
        <div className="player-score-visibility-wrapper">
          <div className={`player-score-vertical-container${animating
            ? ' animating'
            : ''}`}>
            {nextScore !== null &&
            <div className={getPlayerScoreClassName(nextScore)}>
              {nextScore}
            </div>}
            <div className={getPlayerScoreClassName(currentScore)}>
              {currentScore}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerScore
