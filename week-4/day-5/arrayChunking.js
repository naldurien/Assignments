// Write a function that takes two inputs, an array and a size. Break the array into chunks of the given size. For example, if given an //array of [8,9,2,435,42] and a size of 2, your function would return [[8,9], [2,435], [42]].

numbers = [4, 2, 8, 2, 9, 7, 7]

function chunkify(array, size) {
  let chunked = []
  let copy = [...array]
  while (copy.length > 0) {
    chunk = copy.splice(0, size)
    chunked.push(chunk)
  }
  return chunked
}
    
function chunk_position(array, size, position) {
  let chunk = []
  let copy = [...array]
  start = (size * (position-1))
  chunk.push(copy.splice(start, size))
  return chunk
}
