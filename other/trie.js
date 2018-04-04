// We can use a trie. If you've never heard of a trie, think of it this way:
//
// Let's make visited a nested object where each map has keys of just one character.
// So we would store 'google.com' as visited['g']['o']['o']['g']['l']['e']['.']['c']['o']['m']['*'] = true.
//
// The '*' at the end means 'this is the end of an entry'. Otherwise we wouldn't know what parts of
// visited are real URLs and which parts are just prefixes. In the example above, 'google.co' is a
// prefix that we might think is a visited URL if we didn't have some way to mark 'this is the end of an entry.'
//
// Now when we go to add 'google.com/maps' to visited, we only have to add the characters '/maps',
// because the 'google.com' prefix is already there. Same with 'google.com/about/jobs'.
//
// We can visualize this as a tree, where each character in a string corresponds to a node.
// To check if a string is in the trie, we just descend from the root of the tree to a leaf,
// checking for a node in the tree for each character of in string.

class Trie {
  constructor() {
    this.store = {};
  }

  addUrl(word) {
    let current = this.store;
    let isNew = false;

    for (let i = 0; i < word.length; i++) {
      if (current[word[i]]) {
        isNew = true;
        current[i] = {};
      }
      current = current[i];
    }

    if (!current['*']) {
      isNew = true;
      current['*'] = true;
    }

    return isNew;
  }
}