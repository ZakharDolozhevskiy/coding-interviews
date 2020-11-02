// Explanation https://www.geeksforgeeks.org/caesar-cipher-in-cryptography/
function caesarCipher(s, k) {
    var o = []

    for (var i = 0; i < s.length; i++) {
        if (!/[a-zA-Z]/.test(s[i])) {
            o.push(s[i])
        } else {
            var base = s[i] === s[i].toLowerCase() ? 97 : 65
            var char = String.fromCharCode(((s[i].charCodeAt() + k - base) % 26) + base)
            o.push(char)
        }
    }

    return o.join('')
}