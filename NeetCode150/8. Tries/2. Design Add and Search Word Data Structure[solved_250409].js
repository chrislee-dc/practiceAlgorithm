// Design a data structure that supports adding new words and searching for existing words.

// Implement the WordDictionary class:

// void addWord(word) Adds word to the data structure.
// bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
// Example 1:

// Input:
// ["WordDictionary", "addWord", "day", "addWord", "bay", "addWord", "may", "search", "say", "search", "day", "search", ".ay", "search", "b.."]

// Output:
// [null, null, null, null, false, true, true, true]

// Explanation:
// WordDictionary wordDictionary = new WordDictionary();
// wordDictionary.addWord("day");
// wordDictionary.addWord("bay");
// wordDictionary.addWord("may");
// wordDictionary.search("say"); // return false
// wordDictionary.search("day"); // return true
// wordDictionary.search(".ay"); // return true
// wordDictionary.search("b.."); // return true
// Constraints:

// 1 <= word.length <= 20
// word in addWord consists of lowercase English letters.
// word in search consist of '.' or lowercase English letters.

class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    let curr = this.root;
    for (let w of word) {
      if (!curr.children[w]) {
        curr.children[w] = new TrieNode();
      }
      curr = curr.children[w];
    }
    curr.endOfWord = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let stack = [this.root];
    let newStack = [];
    for (let w of word) {
      while (stack.length) {
        let curr = stack.pop();
        if (w === ".") {
          newStack = [...newStack, ...Object.values(curr.children)];
        } else if (curr.children[w]) {
          newStack.push(curr.children[w]);
        }
      }
      stack = newStack;
      newStack = [];
    }

    for (let i = 0; i < stack.length; i++) {
      if (stack[i].endOfWord) return true;
    }
    return false;
  }
}
