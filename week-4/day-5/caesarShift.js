function caesarShift(message, amount) {
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    let messageCaps = message.toUpperCase();
    let shifted = ''
    if (amount < 0) {
        amount +=26
    }
    for (let i = 0; i < messageCaps.length; i++) {
        let char = messageCaps[i]
        if (char == " " || char == "!" || char == "," || char == ".") {
            shifted +=char
        }
        else {
            for (let j = 0; j < alpha.length; j++) {
                if (char == alpha[j]) {
                    let shift = j + amount
                    let char = alpha[shift]
                    shifted += char
                }
            }
        }
    }
    return shifted
}

console.log(caesarShift("Hello, there!", 4))