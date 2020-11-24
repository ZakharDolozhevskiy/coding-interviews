
// Check if a string has all characters with same frequency with one variation allowed
// https://www.geeksforgeeks.org/check-if-a-string-has-all-characters-with-same-frequency-with-one-variation-allowed/?ref=lbp

// "abbca" - true
// "aabbcd" - false

///// Solution /////

const isValidString = (string) => {
    const map = {}

    for (let i = 0; i < string.length; i++) {
        map[string[i]] = map[string[i]] || 0
        map[string[i]]++
    }

    const frequencies = []

    for (let key in map) {
        frequencies.push(map[key])
    }

    let groupA = -1
    let groupB = -1

    let countA = 0
    let countB = 0

    for (let j = 0; j < frequencies.length; j++) {
        if (groupA === -1) {
            groupA = j
            countA++
            continue
        }

        if (groupA === j) {
            countA++
            continue
        }

        if (groupB === -1) {
            groupB = j
            countB++
            continue
        }

        if (groupB === j) {
            countB++
            continue
        }

        return false
    }

    if (groupA > 1 && groupB > 1) {
        return false
    } else {
        return true
    }
}