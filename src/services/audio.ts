export const play = async (audioFile: string) => {
  await new Audio(audioFile).play()
}
