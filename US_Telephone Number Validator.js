function telephoneCheck(str) {
	let validUSNum = /^1((\s\(\d{3}\)|\s\d{3}|\(\d{3}\))(\d{3}|\s\d{3}|[-]\d{3})(\s\d{4}|[-]\d{4}))$|(^(\d{3}|\(\d{3}\))(\d{3}|\s\d{3}|[-]\d{3})(\d{4}|\s\d{4}|[-]\d{4}))$/
	let result = validUSNum.test(str)
	return result;
}

console.log(telephoneCheck("1 (555)555-5555"));



