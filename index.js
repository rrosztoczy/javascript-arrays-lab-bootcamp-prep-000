var kittens = ['Milo', 'Otis', 'Garfield']

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var endKitten = kittens.push(name)
  return endKitten
}

function prependKitten(name) {
  var begKitten = kittens.unshift(name)
  return begKitten
}

function removeLastKitten() {
  var firstKittens = kittens.pop()
  return firstKittens
}