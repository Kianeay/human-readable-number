module.exports = function toReadable(number) {
    let firstMap = new Map([
        [0, "zero"],
        [1, "one"],
        [2, "two"],
        [3, "three"],
        [4, "four"],
        [5, "five"],
        [6, "six"],
        [7, "seven"],
        [8, "eight"],
        [9, "nine"],
        [10, "ten"],
        [11, "eleven"],
        [12, "twelve"],
        [13, "thirteen"],
        [14, "fourteen"],
        [15, "fifteen"],
        [16, "sixteen"],
        [17, "seventeen"],
        [18, "eighteen"],
        [19, "nineteen"],
        [20, "twenty"],
        [30, "thirty"],
        [40, "forty"],
        [50, "fifty"],
        [60, "sixty"],
        [70, "seventy"],
        [80, "eighty"],
        [90, "ninety"],
        [100, "hundred"],
    ]);

    let numberS = number.toString();

    if ((number.length = 0)) {
        for (let key of firstMap.keys()) {
            if (number === key) {
                let result = firstMap.get(number);
                return result;
            }
        }
    } else if (number < 21) {
        for (let key of firstMap.keys()) {
            if (number === key) {
                let result = firstMap.get(number);
                return result;
            }
        }
    } else if (number < 100) {
        if (numberS[1] !== "0") {
            let newNum = parseInt(numberS[0] + "0");
            let secNum = parseInt(numberS[1]);
            for (let key of firstMap.keys()) {
                if (newNum === key) {
                    let result = `${firstMap.get(newNum)} ${firstMap.get(
                        secNum
                    )}`;
                    return result;
                }
            }
        } else {
            for (let key of firstMap.keys()) {
                if (number === key) {
                    let result = firstMap.get(number);
                    return result;
                }
            }
        }
    } else if (number < 1000) {
        if (numberS[2] === "0" && numberS[1] !== "0") {
            let sNum = parseInt(numberS[1] + "0");
            let fNum = parseInt(numberS[0]);
            for (let key of firstMap.keys()) {
                if (fNum === key) {
                    let result = `${firstMap.get(fNum)} ${firstMap.get(100)} ${firstMap.get(sNum)}`;
                    return result;
                }
            }
        } else if (numberS[1] === "0" && numberS[2] !== "0") {
            let sNum = parseInt(numberS[2]);
            let fNum = parseInt(numberS[0]);
            for (let key of firstMap.keys()) {
                if (fNum === key) {
                    let result = `${firstMap.get(fNum)} ${firstMap.get(100)} ${firstMap.get(sNum)}`;
                    return result;
                }
            }
        } else if ( numberS[2] !== "0" && numberS[1] !== "0" ) {
                if (numberS[1] === "1") {
                    let sNum = parseInt(numberS.slice(1, 3));
                    let fNum = parseInt(numberS[0]);
                    for (let key of firstMap.keys()) {
                        if (fNum === key) {
                            let result = `${firstMap.get(fNum)} ${firstMap.get(100)} ${firstMap.get(sNum)}`;
                            return result;
                        }
                    }
                } else {
                    let sNum = parseInt(numberS[1] + "0");
                    let tNum = parseInt(numberS[2]);
                    let fNum = parseInt(numberS[0]);
                    for (let key of firstMap.keys()) {
                        if (fNum === key) {
                            let result = `${firstMap.get(fNum)} ${firstMap.get(
                                100
                            )} ${firstMap.get(sNum)} ${firstMap.get(tNum)}`;
                            return result;
                        }
                    }
                }
           
        } else if (numberS[1] === "0" && numberS[2] === "0") {
            let fNum = parseInt(numberS[0]);
            for (let key of firstMap.keys()) {
                if (fNum === key) {
                    let result = `${firstMap.get(fNum)} ${firstMap.get( 100  )}`;
                    return result;
                }
            }
        }
    }
};
