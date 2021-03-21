// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

const hasFalsyValue = obj => {
  for (const key in obj) {
    if (key == 0)
      return true
  }
};


user = {
  oName: "Fred",
  oTrue: false,
  oValue: 3,
}

console.log(hasFalsyValue(user))