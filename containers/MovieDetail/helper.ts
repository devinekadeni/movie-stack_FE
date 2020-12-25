export function isReleased(releasedDate: string): boolean {
  if (!releasedDate) return false

  const todayTime = new Date().getTime()
  const releasedTime = new Date(releasedDate).getTime()

  return todayTime > releasedTime
}
