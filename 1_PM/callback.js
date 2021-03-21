// In an alternate universe, coins have a `true` and a `false` side.
// Write code that first gets a user via a getUser() call, then in the callback,
// flips a coin and tells the user whether or not their guess was correct

const coinToss = (guess, callback) => {
  const result = Math.round(Math.random())
  const didWin = guess === result
  callback(didWin)
}

const getUser = callback => {
  const user = {
    firstName: "John",
    lastName: "Doe",
    guess: Math.round(Math.random())
  }
  coinToss(user.guess, handleWin)
}

const handleWin = didWin => {
  if (didWin == true)
    console.log("You guessed correctly!")
  else
    console.log("You did not guess correctly.")
}

getUser(coinToss)
