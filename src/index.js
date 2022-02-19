module.exports = function reverse (n) {
    const arr = n.toString().split('');
    const reverced = [];

    for (let i = arr.length; i >= 0; i--) {
        reverced.push(arr[i]);
    }

    return parseInt(reverced.join(''));
}
