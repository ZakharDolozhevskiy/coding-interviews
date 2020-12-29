/// RegExp

var validIPAddress = function(IP) {
    const ipv4 = /^((\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.){4}$/;
    const ipv6 = /^([\da-f]{1,4}:){8}$/i;
    return ipv4.test(IP + '.') ? 'IPv4' : ipv6.test(IP + ':') ? 'IPv6' : 'Neither';
};

/// Iteration

var isValidIPv4 = function(IP) {
    var chuncks = IP.split('.')
    var digits = "0123456789"

    if (chuncks.length !== 4) return null

    for (let i = 0; i < chuncks.length; i++) {
        if (chuncks[i].length > 1 && chuncks[i][0] === '0') {
            return null
        }

        if (chuncks[i] < 0 || chuncks[i] > 255) {
            return null
        }

        if (chuncks[i].length === 0) {
            return null
        }

        for (let j = 0; j < chuncks[i].length; j++) {
            if (!digits.match(chuncks[i][j])) {
                return null
            }
        }
    }

    return 'IPv4'
}

var isValidIPv6 = function(IP) {
    var chuncks = IP.split(':')
    var hexdigits = "0123456789abcdefABCDEF"

    if (chuncks.length !== 8) return null

    for (let i = 0; i < chuncks.length; i++) {
        if (chuncks[i].length < 1 || chuncks[i].length > 4) {
            return null
        }

        for (let j = 0; j < chuncks[i].length; j++) {
            if (!hexdigits.match(chuncks[i][j])) {
                return null
            }
        }
    }

    return 'IPv6'
}

var validIPAddress = function(IP) {
    return isValidIPv4(IP) || isValidIPv6(IP) || 'Neither';
};
