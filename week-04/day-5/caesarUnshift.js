function caesarUnshift(message, shiftRangeStart, shiftRangeStop) {
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    let runs = shiftRangeStop - shiftRangeStart
    let messageCaps = message.toUpperCase();
    let shifted = ''
    let translations = []
    let amount = shiftRangeStart
    if (amount < 0) {
        amount +=26
    }
    for (h = 0; h <= runs; h++) {
        for (let i = 0; i < messageCaps.length; i++) {
            let char = messageCaps[i]
            if (char == " " || char == "!" || char == "," || char == ".") {
                shifted +=char
            }
            else {
                for (let j = 0; j < alpha.length; j++) {
                    if (char == alpha[j]) {
                        let shift = j - amount
                        let char = alpha[shift]
                        shifted += char
                    }
                }
            }
        }
        translations.push(shifted)
        amount -= 1
        shifted = ""
    }

    for (index = 0; index < translations.length; index++) {
        let str = translations[index]
        if (str.includes("BABE")) {
            return translations[index]
        }
        else {
            return translations
        }
    }
        
}


console.log(caesarUnshift("ifz cbcf", 1, 3))

