// The way we can build our Suffix-Trie is to use a bunch of hash tables or dictionaries. Where every node in the suffix
// tree is gonna be a Key in a dictionary, pointing to another dictionary/HashTable (the value of the key will store of
// the next node's dictionary directly so basically, it will be a nested dictionary of dictionary). And all the values in
// the dictionary, will be the other nodes in the tree whose keys will be a specific letter that comes after the previous
// letter, and that points to another hash table, and so on and so forth.
// Sample input (for creation):"babc"
// Sample output (for creation):
// {
// "c": {"*": True},
// "b": {
//         {"c": {"*": True},
//         {"a": {"b":
//                     {"c": {"*": True}}},
//      },
// "a": {
//         "b":
//              {"c": {"*": True}}},
// }

class SuffixTree {
    root = {}
    ending = '*'

    insert(string) {
        for (let i = 0; i < string.length; i++) {
            this.insertStartingAt(i, string)
        }
    }

    insertStartingAt(index, string) {
        let next = this.root

        for (let j = index; j < string.length; j++) {
            next[char] = next[string[j]] || {}
            next = next[char]
        }

        next[this.ending] = true
    }
}