module.exports = function check(str, bracketsConfig) {
  // your solution
    let outPut = true;
    let BracketBool = true;
    let parenthesis = 0;
        for (var i = 0; i < str.length; i++) {
            var symetricParenthesis = 0;
            if (BracketBool != false) {
                for (var j = 0; j < bracketsConfig.length; j++) {
                    if (parenthesis === -1) {
                        BracketBool = false;
                    }
                    if (parenthesis != -1 ) {
                        if ( i === j || str[i] == bracketsConfig[j][1]) {
                            if (str[i] === bracketsConfig[j][0]) {
                                parenthesis += 1;
                            } else {
                                parenthesis -= 1;
                            }
                        }
                       if ( i === j || str[i] == bracketsConfig[j][1]) {
                            if (bracketsConfig[j][1] === bracketsConfig[j][0]) {
                                if (str[i] === bracketsConfig[j][0]) {
                                    parenthesis += 1;
                                }
                                if (str[i] === bracketsConfig[j][1]) {
                                    parenthesis -= 1;
                                }
                            }
                        }
                    } else {
                        BracketBool = false;
                        outPut = false;
                    }
                }
           }
        }
    return outPut;
}
