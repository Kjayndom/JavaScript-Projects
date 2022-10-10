// // ********JAVASCRIPT ALGORITHMS PROJECTS ***********

// // ****PALINDROME CHECKER****

// // function palindrome(str) {
// //   let regex = /[^a-z0-9]/ig
// // 	str = str.toLowerCase().replace(regex, "")
// // 	let reverseStr = "";
// // 	for (let i = str.length - 1; i >= 0; i--){
// // 		reverseStr += str[i]
// // 	}
// // 	return str === reverseStr	
// // }

// // console.log(palindrome("The quick"));


// ****CAESARS CIPHER****

// function rot13(str) {
// 	const letters = 
// 	["A", "B", "C", "D", "E", "F", "G", "H","I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
// 	"A", "B", "C", "D", "E", "F", "G", "H","I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	
// 	let cipherText = "";

// 	for (let i=0; i < str.length; i++){
// 		if (letters.includes(str[i])){
// 			let shift = letters.indexOf(str[i]) + 13
// 			cipherText += letters[shift]
// 		}else {cipherText += str[i]}
// 	}
//  	return cipherText;
// }

// console.log(rot13("SERR PBQR PNZC"));

// *****TELEPHONE NUMBER VALIDATOR*****

// function telephoneCheck(str) {
// 	let validUSNum = /^1((\s\(\d{3}\)|\s\d{3}|\(\d{3}\))(\d{3}|\s\d{3}|[-]\d{3})(\s\d{4}|[-]\d{4}))$|(^(\d{3}|\(\d{3}\))(\d{3}|\s\d{3}|[-]\d{3})(\d{4}|\s\d{4}|[-]\d{4}))$/
// 	let result = validUSNum.test(str)
// 	return result;
// }

// console.log(telephoneCheck("1 (555)555-5555"));


// // ***ROMAN NUMERAL CONVERTER I***

function convertToRoman(num) {
	const numerals = {1: "I", 4: "IV", 5: "V", 9: "IX", 10: "X", 40: "XL", 50: "L", 90: "XC", 100: "C", 400: "CD", 500: "D", 900: "CM", 1000: "M"};
	const numeralKeys = Object.keys(numerals)
	let numAggregate = 0;
	let romanNumeral = ""
	let lastKeyIndex = numeralKeys.length - 1;

	for (let i = 0; i < numeralKeys.length; i++){
		if (num < numeralKeys[i]){
			numAggregate += numeralKeys[i-1]
			romanNumeral+= numerals[numeralKeys[i-1]]
			return romanNumeral + convertToRoman(num-numAggregate)
		} else if (num > numeralKeys[lastKeyIndex]){
			numAggregate+= numeralKeys[lastKeyIndex]
			romanNumeral += numerals[numeralKeys[lastKeyIndex]]
			return romanNumeral + convertToRoman(num-numAggregate)

		} else if (num== numeralKeys[i]) {
			return romanNumeral+= numerals[num]
		}
	}
} 
 console.log(convertToRoman(2200));


// // ***ROMAN NUMERAL CONVERTER II ****
// //  function convertToRoman(num) {
// // 	const numerals = [[1,"I"], [4, "IV"], [5, "V"], [9, "IX"], [10, "X"], [40, "XL"], [50, "L"], [90, "XC"], [100, "C"], [400, "CD"], [500, "D"], [900, "CM"], [1000, "M"]];
// // 	let numAggregate = 0;
// // 	let romanNumeral = ""
// // 	let highestNumIndex = numerals.length - 1;

// // 	for (let i = 0; i < numerals.length; i++){
// // 		if (num < numerals[i][0]){
// // 			numAggregate += numerals[i-1][0]
// // 			romanNumeral += numerals[i-1][1]
// // 			return romanNumeral + convertToRoman(num-numAggregate)

// // 		} else if (num > numerals[highestNumIndex][0]){
// // 			numAggregate += numerals[highestNumIndex][0]
// // 			romanNumeral += numerals[highestNumIndex][1]
// // 			return romanNumeral + convertToRoman(num-numAggregate)

// // 		} else if (num == numerals[i][0]) {
// // 			return romanNumeral += numerals[i][1]
// // 		}
// // 	}
// // } 
// //  console.log(convertToRoman(7));


// // ***CASH REGISTER***

// // function checkCashRegister(price, cash, cid) {
// // 	let change = cash - price;
// // 	const currencyDenomination = {"PENNY": 0.01, "NICKEL": 0.05, "DIME": 0.1, "QUARTER": 0.25, "ONE": 1, "FIVE": 5, "TEN": 10, "TWENTY": 20, "ONE HUNDRED": 100};
// // 	let cidTotalSorted = 0
// // 	let cidTotalUnsorted = 0
// // 	const cidOrderedArray = []; 
// // 	const zeroValuesCidArray = [];

// // 	for(let i= cid.length-1; i>= 0; i--){
// // 		cidTotalUnsorted += cid[i][1]
// // 		if (change >= currencyDenomination[cid[i][0]] && cid[i][1] != 0){ // ignores currencies with zero values

// // 			// calculates the max amount for each denomination based on the current value of change.
// // 			let amountRequiredByDenomination = parseInt(change/currencyDenomination[cid[i][0]]) * currencyDenomination[cid[i][0]]
// // 			if ( amountRequiredByDenomination <= cid[i][1]){  // this ensures the calculated max amount doesn't exceed the denom's amount
// // 				cidOrderedArray.push([cid[i][0], amountRequiredByDenomination])
// // 				cidTotalSorted += amountRequiredByDenomination
// // 				change = (change - amountRequiredByDenomination).toFixed(2)
// // 			} else { // if the calculated max amount is > the denom's amount, the denom amount is added to the array.
// // 				cidOrderedArray.push(cid[i])
// // 				cidTotalSorted += cid[i][1]
// // 				change = (change - cid[i][1]).toFixed(2)
// // 			}
// // 		} else if (cid[i][1] == 0){    // currencies with zero values
// // 			zeroValuesCidArray.push(cid[i]) // array containing currencies with zero values are arranged from highest to lowest denomination
// // 		}
// // 	}
// // 	change = cash - price // resets the value of change
	
// // 	if (change == cidTotalUnsorted){
// // 		return {"status": "CLOSED", "change": cidOrderedArray.concat(zeroValuesCidArray.reverse())}
// // 	} else if (cidTotalUnsorted > change && change == cidTotalSorted.toFixed(2)){
// // 		return {"status": "OPEN", "change": cidOrderedArray}
// // 	} else {
// // 		return {"status": "INSUFFICIENT_FUNDS", "change": []}
// // 	}
// // }
// // console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))


