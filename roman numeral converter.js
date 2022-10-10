// ***ROMAN NUMERAL CONVERTER I***

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


// ***ROMAN NUMERAL CONVERTER II ****
 function convertToRoman(num) {
	const numerals = [[1,"I"], [4, "IV"], [5, "V"], [9, "IX"], [10, "X"], [40, "XL"], [50, "L"], [90, "XC"], [100, "C"], [400, "CD"], [500, "D"], [900, "CM"], [1000, "M"]];
	let numAggregate = 0;
	let romanNumeral = ""
	let highestNumIndex = numerals.length - 1;

	for (let i = 0; i < numerals.length; i++){
		if (num < numerals[i][0]){
			numAggregate += numerals[i-1][0]
			romanNumeral += numerals[i-1][1]
			return romanNumeral + convertToRoman(num-numAggregate)

		} else if (num > numerals[highestNumIndex][0]){
			numAggregate += numerals[highestNumIndex][0]
			romanNumeral += numerals[highestNumIndex][1]
			return romanNumeral + convertToRoman(num-numAggregate)

		} else if (num == numerals[i][0]) {
			return romanNumeral += numerals[i][1]
		}
	}
} 
 console.log(convertToRoman(7));


