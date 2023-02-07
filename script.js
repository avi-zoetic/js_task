//one - capitalize first letter

function capitalize(string) {
  var splitString = string.split(" ");
  var capitalize = splitString.map(
    (el) => el.charAt(0).toUpperCase() + el.slice(1)
  );
  return capitalize.join(" ");
}

//two - sentence case

function sentenceCase(string) {
  return string
    .split(" ")
    .map((el) => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase())
    .join(" ");
}

//find missing one in sorted list

function findMissing(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] > 1) {
      return arr[i] + 1;
    }
  }
}

//return array with check elements

function newArray(arr) {
  let finalArray = [];
  for (let i = 0; i < arr.length; i++) {
    let check = true;
    for (let j = 0; j < finalArray.length; j++) {
      if (arr[i] === finalArray[j]) {
        check = false;
        break;
      }
    }
    if (check) {
      finalArray.push(arr[i]);
    }
  }
  return finalArray;
}

// examples

var textexample = "nietzsche told gOd iS dEaD, but is hE?";
var missingarray = [1, 2, 3, 4, 6, 7, 8];
var randomarray = [1, 1, 2, 3, 5, 78, 78, 9, 2];

console.log("capitalize first letter only:", capitalize(textexample));
console.log("Sentence case:", sentenceCase(textexample));
console.log("Find missing element:", findMissing(missingarray));
console.log("Array with unique elements:", newArray(randomarray));
