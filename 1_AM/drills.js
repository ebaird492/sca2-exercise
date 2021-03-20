const assert = require("assert")

// Feel free to look things up online!

const reverse = function(str) {
  revString = ""
  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i]
  }
  return revString
}

const factorial = function(num) {
  if (num == 0)
    return 1
  else
    return num * factorial(num-1)
}

const announceDate = function() {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
}

const shiftRight = function(str, num) {
  let tempStr = []
  for (let i = 0; i < str.length; i++) {
    let index = i + num
    index = index % str.length
    tempStr[index] = str[i]
  }
  return tempStr.toString().replace(/,/g, "")
}

const tokenize = function(str) {
  return str.split(" ")
}

const uniqueOnes = function(ary) {
  let uniqueArr = []
  for (let i = 0; i < ary.length; i++) {
    if (uniqueArr.indexOf(ary[i]) == -1) {
      uniqueArr.push(ary[i])
    }
  }
  return uniqueArr
}

const zip = function(arr1, arr2) {
  if (arr1.length != arr2.length)
    return -1
  else {
    let zipArr = []
    for (let i = 0; i < arr1.length; i++) {
      zipArr[i] = [arr1[i], arr2[i]]
    }
    return zipArr
  }
}

const unzip = function(arr) {
  arr1 = []
  arr2 = []
  for (let i = 0; i < arr.length; i++) {
    arr1[i] = arr[i][0]
    arr2[i] = arr[i][1]
  }
  return [arr1, arr2]
}

// Write tests here:

assert(1 < 2)
assert(1 + 2 == 3)
assert([2, 3][0] === 2)
// assert(reverse("3df") === "fd3")
console.log(reverse("burrito")) // returns "otirrub"
console.log(factorial(5)) // returns 120
console.log(announceDate()) // returns current date and time
console.log(shiftRight("hello", 3)) // returns "llohe"
console.log(tokenize("hello my name is ethan")) // returns ["hello", "my", "name" , "is", "ethan"]
console.log(uniqueOnes(["apples", "oranges", "apples"])) // retruns ["apples", "oranges"]
console.log(zip([1,2,3],[2,3,4])) // returns [[1,2], [2,2], [3,4]]
console.log(zip([1,2],[3,4,5])) // returns -1
console.log(unzip([[1,2], [2,3], [3,4]])) // returns [[1,2,3] [2,3,4]]
