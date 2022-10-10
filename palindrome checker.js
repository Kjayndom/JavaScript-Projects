****PALINDROME CHECKER****

function palindrome(str) {
  let regex = /[^a-z0-9]/ig
	str = str.toLowerCase().replace(regex, "")
	let reverseStr = "";
	for (let i = str.length - 1; i >= 0; i--){
		reverseStr += str[i]
	}
	return str === reverseStr	
}

console.log(palindrome("The quick"));


