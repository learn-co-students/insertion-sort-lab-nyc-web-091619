function findMinAndRemove (array) {
  let minimum = array[0]
  let minIdx = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i] < minimum) {
      minimum = array[i]
      minIdx = i
    }
  }
  array.splice(minIdx, 1)
  return minimum
}

function insertionSort (array) {
  const sorted = []
  let min
  while (array.length !== 0) {
    min = findMinAndRemove(array) 
    sorted.push(min)
  }
  return sorted
}
