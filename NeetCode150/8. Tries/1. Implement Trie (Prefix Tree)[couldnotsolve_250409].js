class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class PrefixTree {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let curr = this.root;
    for (const w of word) {
      if (!(w in curr.children)) {
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
    let curr = this.root;
    for (const w of word) {
      if (!(w in curr.children)) {
        return false;
      }
      curr = curr.children[w];
    }
    console.log("here", curr);
    return curr.endOfWord;
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let curr = this.root;
    for (let c of prefix) {
      if (!(c in curr.children)) {
        return false;
      }
      curr = curr.children[c];
    }
    return true;
  }
}
