import * as player from './player'

export const getCurrentService = (
  players: player.PlayersInterface,
  initialService: player.selectedPlayer | undefined,
): player.selectedPlayer | undefined => {

  if (!initialService) {
    return
  }

  let totalPoints = players[player.PLAYER_A].score +
    players[player.PLAYER_B].score

  if (totalPoints >= 20) {
    if (totalPoints % 2 === 0) {
      return initialService
    } else {
      return initialService === player.PLAYER_A
        ? player.PLAYER_B
        : player.PLAYER_A
    }
  }

  totalPoints++
  if (totalPoints % 2 !== 0) {
    totalPoints++
  }

  if (totalPoints % 4 === 0) {
    return initialService === player.PLAYER_A
      ? player.PLAYER_B
      : player.PLAYER_A
  } else {
    return initialService
  }
}
