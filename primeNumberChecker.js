function primeNumberChecker(num){
	// num = parseInt(prompt("Enter a number: "))
	var divisionCount = 0 // divisionCount counts the number of times "num" is equailly divisible
	for (var i = 2; i <= num; i++){
		if ( num % i == 0){
			divisionCount ++
		}
	}
	if (divisionCount == 1){ //A prime number should only be equally divisible by itself
		console.log(num, "is a prime number.")
	} else console.log(num, "is not a prime number")
} 


primeNumberChecker()
