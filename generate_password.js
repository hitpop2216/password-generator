function generatePassword(options) {
  // define letters, numbers, symbols
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'
  
  // collection box
  let collection = []
  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }

  // remove words user picked up
  if (options.excludeCharacters) {
    collection = collection.filter(
      word => !options.excludeCharacters.includes(word)
    )
  }

  // return error if collection is empty
  if(collection.length === 0) {
    return "There is no vaild characters in your selections."
  }

  // start generating password
  let length = Number(options.length)
  let password = ''
  for (let i = 0; i < length; i++) {
    password += sample(collection)
  }

  // return password
  return password
}

function sample(arr) {
  let randomNumber = Math.floor(Math.random() * arr.length)
  return arr[randomNumber]
}

module.exports = generatePassword