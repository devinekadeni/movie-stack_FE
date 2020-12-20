export function isInViewportVertically(el: null | HTMLDivElement): boolean {
  if (!el) {
    return false
  }

  const { top, bottom, height } = el.getBoundingClientRect()

  // NOTE: 117 --> header height
  if (
    (top >= 117 && top <= window.innerHeight - (1 / 2) * height) ||
    (bottom >= (1 / 2) * height + 117 && bottom <= window.innerHeight)
  ) {
    return true
  }

  return false
}

export function deepClone(data: any): any {
  return JSON.parse(JSON.stringify(data))
}

export function shuffleArray(arrayData: any[]): any[] {
  const clonedArray = deepClone(arrayData)

  if (!Array.isArray(clonedArray)) {
    return arrayData
  }

  let currentIndex = clonedArray.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = clonedArray[currentIndex]
    clonedArray[currentIndex] = clonedArray[randomIndex]
    clonedArray[randomIndex] = temporaryValue
  }

  return clonedArray
}
