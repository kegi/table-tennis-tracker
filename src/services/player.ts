export const PLAYER_A = 'left'
export const PLAYER_B = 'right'

export interface PlayerInterface {
  name: string,
  score: number,
  displayedScore: number | string,
}

export interface PlayersInterface {
  [PLAYER_A]: PlayerInterface,
  [PLAYER_B]: PlayerInterface,
}

export type selectedPlayer = typeof PLAYER_A | typeof PLAYER_B

const DEFAULT_NAME_PLAYER: {
  [key: string]: string
} = {
  [PLAYER_A]: 'Player A',
  [PLAYER_B]: 'Player B',
}

export const getDefaultPlayers = (
  playerA?: PlayerInterface,
  playerB?: PlayerInterface,
): PlayersInterface => ({
  [PLAYER_A]: playerA || generatePlayer(PLAYER_A),
  [PLAYER_B]: playerB || generatePlayer(PLAYER_B),
})

export const generatePlayer = (key: string): PlayerInterface => ({
  name: DEFAULT_NAME_PLAYER[key],
  score: 0,
  displayedScore: 0,
})

export const getRandomService = (): selectedPlayer => {
  const turns: selectedPlayer[] = [PLAYER_A, PLAYER_B]
  return turns[Math.floor(Math.random() * 2)]
}

export const getPlayerScore = (player: PlayerInterface): number | string => (
  player.displayedScore
)

export const getPlayerName = (player: PlayerInterface): string => (
  player.name
)

export const isLeft = (player: selectedPlayer): boolean => (
  player === PLAYER_A
)

export const isRight = (player: selectedPlayer): boolean => (
  player === PLAYER_B
)

export const addPoint = (
  players: PlayersInterface,
  player: selectedPlayer,
  points: number = 1,
): PlayersInterface => {

  const scores = {
    [PLAYER_A]: players[PLAYER_A].score,
    [PLAYER_B]: players[PLAYER_B].score,
  }

  scores[player] = Math.max(scores[player] + points, 0)

  const displayedScores: { [key: string]: number | string } = { ...scores }

  const totalPoints = scores[PLAYER_A] + scores[PLAYER_B]
  const diffPoints = Math.abs(scores[PLAYER_A] - scores[PLAYER_B])

  if (totalPoints >= 20) {
    if (diffPoints >= 2) {
      if (scores[PLAYER_A] > scores[PLAYER_B]) {
        scores[PLAYER_A] = 12
        displayedScores[PLAYER_A] = totalPoints > 20 ? 12 : 11
      } else {
        scores[PLAYER_B] = 12
        displayedScores[PLAYER_B] = totalPoints > 20 ? 12 : 11
      }
    } else {
      if (scores[PLAYER_A] === scores[PLAYER_B]) {
        scores[PLAYER_A] = 10
        scores[PLAYER_B] = 10
        displayedScores[PLAYER_A] = 10
        displayedScores[PLAYER_B] = 10
      } else if (scores[PLAYER_A] > scores[PLAYER_B]) {
        scores[PLAYER_A] = 11
        displayedScores[PLAYER_A] = 'ADV'
      } else if (scores[PLAYER_B] > scores[PLAYER_A]) {
        scores[PLAYER_B] = 11
        displayedScores[PLAYER_B] = 'ADV'
      }
    }
  }

  return {
    ...players,
    [PLAYER_A]: {
      ...players[PLAYER_A],
      score: scores[PLAYER_A],
      displayedScore: displayedScores[PLAYER_A],
    },
    [PLAYER_B]: {
      ...players[PLAYER_B],
      score: scores[PLAYER_B],
      displayedScore: displayedScores[PLAYER_B],
    },
  }
}

export const removePoint = (
  players: PlayersInterface,
  player: selectedPlayer,
  points: number = 1,
): PlayersInterface => addPoint(players, player, points * -1)

export const setPoints = (
  players: PlayersInterface,
  player: selectedPlayer,
  points: number,
): PlayersInterface => ({
  ...players,
  [player]: {
    ...players[player],
    score: points,
    displayedScore: points,
  },
})

export const resetPoints = (
  players: PlayersInterface,
  player?: selectedPlayer,
): PlayersInterface => {
  if (player) {
    return setPoints(players, player, 0)
  }
  return setPoints(setPoints(players, PLAYER_B, 0), PLAYER_A, 0)
}

export const getWinner = (players: PlayersInterface): selectedPlayer | null => {

  const diffPoints = Math.abs(players[PLAYER_A].score - players[PLAYER_B].score)
  if (players[PLAYER_A].score >= 11 && diffPoints >= 2) {
    return PLAYER_A
  }
  if (players[PLAYER_B].score >= 11 && diffPoints >= 2) {
    return PLAYER_B
  }
  return null
}
