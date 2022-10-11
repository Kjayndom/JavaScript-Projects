function primeNumberChecker(num){
	// num = parseInt(prompt("Welcome to The Prime Number Validator.\nEnter a number: "))
	
	if (num > 7 && (num % 3 == 0 || num % 5 == 0 || num % 7 == 0)) {
		console.log(num, "is not a prime number")
	} else if (num > 2 && num % 2 == 0 || num < 2){ // checks for even numbers greater than 2 or numbers less than 2.
		console.log(num, "is not a prime number.")
	} else (console.log(num, "is a prime number."))			
} 
primeNumberChecker()
