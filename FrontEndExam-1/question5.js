/**
 * 1 - A function that will return the length of a string Recursively
 *
 * params : string : string
 * expected output :  length : number
 */

function countString1(str) {
	if (str === "") return 0;

	return 1 + countString1(str.slice(1));
}
function countString2(str, len = 0) {
	if (str === "") return len;

	return countString2(str.slice(1), len + 1);
}

/**
 * 2 - A program that prints a multiplication table for numbers up to 12
 *
 * expected output : 12 * 1 = 12 ===========> 12 * 12 = 144
 */

class TableRow {
	constructor(num) {
		this.num = num;
	}
	print(upto) {
		let str = "";
		let wrapper = "/--------------------------------------------------------------------------/";

		str += wrapper + "\n";
		for (let i = this.num; i <= upto; i++) {
			str += ` ${i === this.num ? "" : "|"} ${this.num} * ${i} = ${this.num * upto}`;
		}
		str += "\n" + wrapper;

		console.log(str);
	}
}
class MulTable {
	static print(upto) {
		for (let i = 1; i <= upto; i++) {
			const tableRow = new TableRow(i);
			console.log("\n");
			tableRow.print(upto);
			console.log("\n");
		}
	}
}

/**
 * 3 - A function that returns the elements on odd positions in a list
 *
 * params : Array<number>
 * expected output : Array<number> odd positions
 */

function filterEvenPos(arr) {
	return arr.filter((x, i) => i % 2 !== 0);
}

/**
 * 4 - A function to check for prime
 *
 * params : number
 * expected output : boolean
 */

function isPrime(num) {
	if (num === 2 || num === 3) return true;
	for (let i = 2; i * i <= num; i++) {
		if (num % i === 0) return false;
	}
	return true;
}

/**
 * 5 - A function to generate html body background dynamically
 */

function changeBodyBg(color) {
	document.body.style.backgroundColor = color;
}

/**
 * 6 - A function to count the number of vowels in a given string
 *
 * params : string
 * output : num of vowels : number
 */

function countVowels(str) {
	const vowels = ["a", "e", "i", "o", "u"];

	return str.split("").reduce((tot, curr) => {
		if (vowels.indexOf(curr) !== -1) {
			return tot + 1;
		}
		return tot;
	}, 0);
}

/**
 * 7 - mother class animal define inside it a name and an age variables, and set_value() func.
 * then create two bases variables Zebra and Dolphine which write a message telling the age, the name and giving some extra information like place of origin
 */

class Animal {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	set_value() {}
}

class Zebra extends Animal {
	constructor(name, age, placeOfOrigin) {
		super(name, age);
		this.placeOfOrigin = placeOfOrigin;
	}
	info() {
		return `name: ${this.name}, age: ${this.age}, place of origin: ${this.placeOfOrigin}`;
	}
}
class Dolphin extends Animal {
	constructor(name, age, placeOfOrigin) {
		super(name, age);
		this.placeOfOrigin = placeOfOrigin;
	}
	info() {
		return `name: ${this.name}, age: ${this.age}, place of origin: ${this.placeOfOrigin}`;
	}
}

/**
 * 9 -
 */

class MyObject {
	constructor(name, message) {
		this.name = name;
		this.message = message;
	}
	getName() {
		return this.name;
	}
	getMessage() {
		return this.message;
	}
}

function createObj(name, message) {
	function getName() {
		return name;
	}
	function getMessage() {
		return message;
	}
	return {
		name,
		message,
		getName,
		getMessage,
	};
}

/**
 * 10 -
 */
