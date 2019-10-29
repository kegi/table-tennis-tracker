import React, { useEffect, useState } from 'react'

import PlayerSide from './PlayerSide'
import PlayerName from './PlayerName'
import PlayerScore from './PlayerScore'
import Winner from './Winner'
import ScoreSeparator from './ScoreSeparator'
import ServiceIndicator from './ServiceIndicator'
import WaitingForPlayers from './WaitingForPlayers'
import WaitingForRestart from './WaitingForRestart'
import AnimatedBackground from './AnimatedBackground'

import * as player from '../services/player'
import * as audio from '../services/audio'
import * as service from '../services/service'

import MouseManager from '../mouseManager'

import serviceSound from '../../assets/audio/service.wav'

const GAME_STATE_PAUSE = 0
const GAME_STATE_WAITING_FOR_START = 1
const GAME_STATE_ONGOING = 2
const GAME_STATE_SHOW_WINNER = 3
const GAME_STATE_WAITING_FOR_RESTART = 4

const App: React.FC = () => {

  /* ********** */
  /* App states */
  /* ********** */

  const [mouseManager, setMouseManager] = useState<MouseManager | undefined>()
  const [gameState, setGameState] = useState<number>(
    GAME_STATE_WAITING_FOR_START)
  const [players, setPlayers] = useState<player.PlayersInterface>(
    player.getDefaultPlayers())
  const [playerAReady, setPlayerAReady] = useState<boolean>(false)
  const [playerBReady, setPlayerBReady] = useState<boolean>(false)
  const [winner, setWinner] = useState<player.selectedPlayer | undefined>()
  const [initialService, setInitialService] = useState<player.selectedPlayer | undefined>()
  const [currentService, setCurrentService] = useState<player.selectedPlayer | undefined>()

  /* ******* */
  /* Effects */
  /* ******* */

  /**
   * instantiate mouse manager
   */
  useEffect(() => {
    if (!mouseManager) {
      setMouseManager(new MouseManager())
    }
    return () => {
      if (mouseManager) {
        mouseManager.destroy()
        setMouseManager(undefined)
      }
    }
  }, [])

  /**
   * set mouse listeners
   */
  useEffect(() => {
    if (!mouseManager) {
      return
    }
    mouseManager.setListeners({
      onLeftClick: () => onPlayerScore(player.PLAYER_A),
      onRightClick: () => onPlayerScore(player.PLAYER_B),
      onLeftLongClick: () => onPlayerCancelPoint(player.PLAYER_A),
      onRightLongClick: () => onPlayerCancelPoint(player.PLAYER_B),
      onLeftButtonDown: () => onPlayerReady(player.PLAYER_A, true),
      onLeftButtonUp: () => onPlayerReady(player.PLAYER_A, false),
      onRightButtonDown: () => onPlayerReady(player.PLAYER_B, true),
      onRightButtonUp: () => onPlayerReady(player.PLAYER_B, false),
    })
  })

  /**
   * set service
   */
  useEffect(() => {
    const hasPoints = player.getPlayerScore(players[player.PLAYER_A]) > 0 ||
      player.getPlayerScore(players[player.PLAYER_B]) > 0
    const newService = service.getCurrentService(
      players,
      initialService,
    )
    if (hasPoints && currentService && currentService !== newService) {
      audio.play(serviceSound)
    }
    setCurrentService(newService)
  })

  /* ************** */
  /* Game functions */
  /* ************** */

  /**
   * start the game (reset all states and set service randomly)
   */
  const start = async () => {
    setGameState(GAME_STATE_PAUSE)
    setPlayers(player.resetPoints(players))
    setPlayerAReady(false)
    setPlayerBReady(false)
    setInitialService(player.getRandomService())
    setCurrentService(undefined)
    setWinner(undefined)

    await wait(1000)
    setGameState(GAME_STATE_ONGOING)
  }

  /**
   * when waiting for players to start the game, listen for player ready
   * this will also reset the game at the end when player are ready to start
   */
  const onPlayerReady = (activePlayer: any, isReady: boolean) => {
    if (gameState === GAME_STATE_WAITING_FOR_RESTART) {
      start()
      return
    }

    if (gameState !== GAME_STATE_WAITING_FOR_START) {
      return
    }

    switch (activePlayer) {
      case player.PLAYER_A: {
        setPlayerAReady(isReady)
        break
      }

      case player.PLAYER_B:
        setPlayerBReady(isReady)
        break
    }

    if (playerAReady && playerBReady) {
      start()
    }
  }

  /**
   * register a nre point for a player
   */
  const onPlayerScore = async (activePlayer: any) => {

    if (gameState !== GAME_STATE_ONGOING) {
      return
    }

    let updatedPlayers = null

    switch (activePlayer) {
      case player.PLAYER_A:
        updatedPlayers = player.addPoint(players, player.PLAYER_A)
        break
      case player.PLAYER_B:
        updatedPlayers = player.addPoint(players, player.PLAYER_B)
        break
    }

    if (!updatedPlayers) {
      return
    }

    setPlayers(updatedPlayers)

    const newWinner = player.getWinner(updatedPlayers)

    if (newWinner) {
      setWinner(newWinner)
      setGameState(GAME_STATE_SHOW_WINNER)

      await wait(4250)

      setGameState(GAME_STATE_WAITING_FOR_RESTART)
    }
  }

  /**
   * cancel the last point of a player
   */
  const onPlayerCancelPoint = async (activePlayer: any) => {

    if (gameState !== GAME_STATE_ONGOING) {
      return
    }

    switch (activePlayer) {
      case player.PLAYER_A:
        setPlayers(player.removePoint(players, player.PLAYER_A))
        break
      case player.PLAYER_B:
        setPlayers(player.removePoint(players, player.PLAYER_B))
        break
    }

    /* hack to prevent button bounces after cancellation */
    // fixme : this should be handled in mouse manager

    setGameState(GAME_STATE_PAUSE)
    await wait(500)
    setGameState(GAME_STATE_ONGOING)
  }

  const wait = (delay: number) => new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, delay)
  })

  const getWrapperClassName = (): string => {
    switch (gameState) {
      case GAME_STATE_WAITING_FOR_START:
        return 'waiting-for-start'
      case GAME_STATE_WAITING_FOR_RESTART:
      case GAME_STATE_SHOW_WINNER:
        return `show-winner ${winner && player.isLeft(winner)
          ? 'winner-left'
          : 'winner-right'}`
    }
    return ''
  }

  return (
    <>

      <AnimatedBackground/>

      {gameState === GAME_STATE_SHOW_WINNER && <AnimatedBackground
        showWinner={true}
      />}

      {(gameState === GAME_STATE_SHOW_WINNER || gameState ===
        GAME_STATE_WAITING_FOR_RESTART) && <Winner/>}
      {(gameState === GAME_STATE_SHOW_WINNER || gameState ===
        GAME_STATE_WAITING_FOR_RESTART) && <ScoreSeparator/>}

      {gameState === GAME_STATE_WAITING_FOR_RESTART && <WaitingForRestart/>}

      <div className={`game ${getWrapperClassName()}`}>

        {gameState === GAME_STATE_WAITING_FOR_START && <WaitingForPlayers/>}

        <PlayerSide
          className={currentService && player.isLeft(currentService)
            ? 'player-left active'
            : 'player-left'}
          overlay={playerAReady}
        >
          <PlayerName name={player.getPlayerName(players[player.PLAYER_A])}/>
          <PlayerScore score={player.getPlayerScore(players[player.PLAYER_A])}/>
        </PlayerSide>

        <PlayerSide
          className={currentService && player.isRight(currentService)
            ? 'player-right active'
            : 'player-right'}
          overlay={playerBReady}
        >
          <PlayerName name={player.getPlayerName(players[player.PLAYER_B])}/>
          <PlayerScore score={player.getPlayerScore(players[player.PLAYER_B])}/>
        </PlayerSide>

        {
          currentService && <ServiceIndicator side={currentService}/>
        }
      </div>
    </>
  )
}

export default App
