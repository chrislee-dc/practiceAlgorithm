// Question

// Given a list of inputs which are strings of words separated by commas, print specific words from the input in a given format.

// e.g. String input could be a list of strings that look like this: "1, A1, 5000, card_number, 1234567"
// The words represent the timestamp, ID, amount, type, and value respectively. For each string input, print the info in this format: "ID amount APPROVED".
// You can assume everything is approved for now.
// Print the info in chronological order according to their timestamps.

// Answer

// Using the same list of string inputs and another list of string inputs denoting requirements, print each string input in this format: "ID amount APPROVED" if it does not violate any of the requirements and "ID amount REJECTED" if it does violate.

// e.g. String input could be a list of strings that look like this: "1, A1, 5000, card_number, 1234567"
// Requirements could be a list of string that look like this: "1, card_number, 1234567". This means that when timestamp 1 happens, this requirement is activated and anything that has a timestamp of 1 or higher and has type card_number and value of 1234567 should be printed with "REJECTED" instead of "APPROVED".

function printStringInOrder(inputs) {
  inputs.sort();

  for (let ai = 0; ai < inputs.length; ai++) {
    const [_, id, amount, __, ___] = inputs[ai].split(", ");
    console.log(`${id} ${amount} APPROVED`);
  }
}

printStringInOrder([
  "2, A2, 5000, card_number, 1234567",
  "1, A1, 5000, card_number, 1234567",
]);
