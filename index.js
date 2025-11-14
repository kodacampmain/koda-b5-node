// const file = require("./src/file.js");
// default import
// import koda from "./src/file.js";
// named import
// import { isMarried as statusMenikah } from "./src/file.js";
// default + named import
import koda, { isMarried as statusMenikah } from "./src/file.js";

import { createInterface } from "node:readline/promises";
// import { createInterface } from "node:readline";

// koda.greeting();
// console.log(koda.myNumber);
// console.log(statusMenikah);

// console.log("Hello World");

// rl.question("What is your favorite food? ", (answer) => {
//   console.log(`Oh, so your favorite food is ${answer}`);
//   rl.close();
// });
function addition(n1, n2) {
	return parseInt(n1) + parseInt(n2);
}
async function startTerminal() {
	try {
		const rl = createInterface({
			input: process.stdin,
			output: process.stdout,
		});
		const num1 = await rl.question("Masukkan angka pertama: ");
		const num2 = await rl.question("Masukkan angka kedua: ");
		console.log(`${num1} + ${num2} = ${addition(num1, num2)}`);
	} catch (error) {
		console.log(error);
	} finally {
		rl.close();
	}
}
// startTerminal();

import { sebuahProgram, sebuahProgramModifikasi } from "./src/program.js";
console.log(sebuahProgram("true"));
console.log(sebuahProgram(true));
try {
	console.log(sebuahProgramModifikasi("true"));
} catch (error) {
	console.log(error);
}
try {
	console.log(sebuahProgramModifikasi(true));
} catch (error) {
	console.log(error);
}
