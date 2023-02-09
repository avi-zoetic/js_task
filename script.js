//one - capitalize first letter

function capitalize(string) {
  let capitalizedString = "";
  let capital = true;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      capital = true;
      capitalizedString += " ";
    } else if (capital) {
      capitalizedString += string[i].toUpperCase();
      capital = false;
    } else {
      capitalizedString += string[i];
    }
  }
  return capitalizedString;
}

//two - sentence case

function sentenceCase(string) {
  let result = "";
  let capitalize = true;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      capitalize = true;
      result += " ";
    } else if (capitalize) {
      result += string[i].toUpperCase();
      capitalize = false;
    } else {
      result += string[i].toLowerCase();
    }
  }
  return result;
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
  let checked = {};
  for (let i = 0; i < arr.length; i++) {
    if (!checked[arr[i]]) {
      checked[arr[i]] = true;
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
