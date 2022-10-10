


// ***CASH REGISTER***
// This is a virtual cash register that compares the change to be received with the amount available in the cash drawer and returns change if any in an orderly fashion
// And displays the amount left in the register according to currency denomination.

function checkCashRegister(price, cash, cid) {
	 // cid stands for available cash in drawer
	let change = cash - price;
	const currencyDenomination = {"PENNY": 0.01, "NICKEL": 0.05, "DIME": 0.1, "QUARTER": 0.25, "ONE": 1, "FIVE": 5, "TEN": 10, "TWENTY": 20, "ONE HUNDRED": 100};
	let cidTotalSorted = 0
	let cidTotalUnsorted = 0
	const cidOrderedArray = []; 
	const zeroValuesCidArray = [];

	for(let i= cid.length-1; i>= 0; i--){
		cidTotalUnsorted += cid[i][1]
		if (change >= currencyDenomination[cid[i][0]] && cid[i][1] != 0){ // ignores currencies with zero values

			// calculates the max amount for each denomination based on the current value of change.
			let amountRequiredByDenomination = parseInt(change/currencyDenomination[cid[i][0]]) * currencyDenomination[cid[i][0]]
			if ( amountRequiredByDenomination <= cid[i][1]){  // this ensures the calculated max amount doesn't exceed the denom's amount
				cidOrderedArray.push([cid[i][0], amountRequiredByDenomination])
				cidTotalSorted += amountRequiredByDenomination
				change = (change - amountRequiredByDenomination).toFixed(2)
			} else { // if the calculated max amount is > the denom's amount, the denom amount is added to the array.
				cidOrderedArray.push(cid[i])
				cidTotalSorted += cid[i][1]
				change = (change - cid[i][1]).toFixed(2)
			}
		} else if (cid[i][1] == 0){    // currencies with zero values
			zeroValuesCidArray.push(cid[i]) // array containing currencies with zero values are arranged from highest to lowest denomination
		}
	}
	change = cash - price // resets the value of change
	
	if (change == cidTotalUnsorted){
		return {"status": "CLOSED", "change": cidOrderedArray.concat(zeroValuesCidArray.reverse())}
	} else if (cidTotalUnsorted > change && change == cidTotalSorted.toFixed(2)){
		return {"status": "OPEN", "change": cidOrderedArray}
	} else {
		return {"status": "INSUFFICIENT_FUNDS", "change": []}
	}
}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))


