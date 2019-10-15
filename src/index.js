module.exports = function check(str, bracketsConfig) {
  // your solution
    let outPut = true;
    let count = 0;
    let openBrackets = [];
    let closeBrackets = [];
    
	for (let i = 0; i < bracketsConfig.length; i++) {
		openBrackets.push(bracketsConfig[i][0]);
	}
	for (let i = 0; i < bracketsConfig.length; i++) {
		closeBrackets.push(bracketsConfig[i][1]);
	}
	if (str.length % 2 != 0) {
		outPut = false;
	} else {
		if (openBrackets.includes(str[0])) {
		count++;
			for (let j = 1; j <= str.length-1; j++) {
				if (openBrackets.includes(str[j])) {
					count++;
		    		/*if (str[j+1] != undefined && str[j+1] != bracketsConfig[closeBrackets.indexOf(str[j+1])][1] ) {
		    			outPut = false;
		    			break;
		    		}*/	
				} else {
					if (closeBrackets.includes(str[j])) {
						if (count==0) {
							count--;
							if (count < 0) {
								outPut = false;
								break;
							}
						}							
						if (str[j] == bracketsConfig[closeBrackets.indexOf(str[j], 0)][1] && str[j-1] == bracketsConfig[closeBrackets.indexOf(str[j], 0)][0]) {
							count--;
					    } 
					    if (count < 0) {
							outPut = false;
							break;
						}
					}	
				} if (count < 0) {
					outPut = false;
					break;
				}	
			}	
		} else { 
		outPut = false;
		}		
	}
	
    return outPut;
}
