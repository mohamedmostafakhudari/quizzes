/**
 * 1 -
 *  h2 ~ p
 *    paragraph 2
 *    paragraph 3
 *  h2 + p
 *    paragraph 2
 */

/**
 * 2 -
 *
 *  <h2>Mailing Address</h2>
 *  <address>
 *  6410 Via Real<br />
 *  Carpinteria, CA 93013<br />
 *  <a href="#">info@linkedin.com</a>
 *  </address>
 */

/**
 * 3 - areAnagrams
 */
const string1 = "listen";
const string2 = "silent";
function areAnagrams(str1, str2) {
	if (str1.length !== str2.length) return false;
	return sumCharCode(str1) === sumCharCode(str2);
}
function sumCharCode(str) {
	return cleanStr(str)
		.split("")
		.reduce((sum, c) => sum + c.charCodeAt(0), 0);
}
function cleanStr(str) {
	return str.replace(/[^a-z]/gi, "");
}

console.log(`"${string1}" and "${string2}" are${areAnagrams(string1, string2) ? "" : " not "} anagrams`);

/**
 * 4 - calculateMean
 */
const arr = [1, 2, 3, 4, 5];
const calculateMean = (arr) => arr.reduce((acc, curr) => acc + curr) / arr.length;
console.log(`The mean of the array [${arr}] is ${calculateMean(arr)}`);

/**
 * 5 - seasonChecker
 */
const map = new Map([
	["September", "Autumn"],
	["October", "Autumn"],
	["November", "Autumn"],
	["December", "Winter"],
	["January", "Winter"],
	["February", "Winter"],
	["March", "Spring"],
	["April", "Spring"],
	["May", "Spring"],
	["June", "Summer"],
	["July", "Summer"],
	["August", "Summer"],
]);
const userInput = "December";

function seasonChecker(userInput) {
	return map.get(userInput);
}
console.log(seasonChecker(userInput));

/**
 * 6 - factorial
 */

const example_num = 10;
function calcFactorial(x) {
	const result = fac(x);
	return result;

	function fac(x) {
		if (x <= 0) return 1;
		return x * fac(x - 1);
	}
}
console.log(`fac(${example_num}) is ${calcFactorial(example_num)}`);

/**
 * 7 - dublicate array elements
 */

const example_arr = [1, 2, 3, 4];

const dublicate = (arr) => arr.concat(arr);

console.log(dublicate(example_arr));

/**
 * 8 - ways to empty an array
 *
 *  a - reassigning with empty array []
 *  b - setting length property to 0
 *  c - .splice(0, array.length) method
 *  d - .pop() method in a loop
 */
