****CAESARS CIPHER****

function CIPHER_UNLOCKER(str) {
	const letters = 
	["A", "B", "C", "D", "E", "F", "G", "H","I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
	"A", "B", "C", "D", "E", "F", "G", "H","I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	
	let cipherText = "";

	for (let i=0; i < str.length; i++){
		if (letters.includes(str[i])){
			let shift = letters.indexOf(str[i]) + 13
			cipherText += letters[shift]
		}else {cipherText += str[i]}
	}
 	return cipherText;
}

console.log(CIPHER_UNLOCKER("SERR PBQR PNZC"));

