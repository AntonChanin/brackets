module.exports = function check(str, bracketsConfig) {
  // your solution
    let outPut = true;
    count = 0;
	k = 0;
    for (let i = 0; i < str.length; i++) {
		if (str[i] == bracketsConfig[k][0]) {
			count++;
		};
		if (str[i] == bracketsConfig[k][1]) {
			count--;
		}
		if (count < 0) {
			outPut = false;
			break;
		}  if (i == str.length){
			i = 0;
			k++; 
		}
	}
    return outPut;
}
