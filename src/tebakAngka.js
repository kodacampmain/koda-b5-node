import { createInterface } from "node:readline/promises";

export const rl = createInterface({
	input: process.stdin,
	output: process.stdout,
});

function isNumber(input) {
	const re = /^\d{1,}$/;
	return re.test(input);
}

export async function tebakAngka(userInput) {
	const target = Math.floor(Math.random() * 100);
	let nTebakan = 0;
	let isTebakanBenar = false;
	try {
		// for (;!isTebakanBenar;) {
		while (!isTebakanBenar) {
			const input = await userInput.question("Masukkan tebakan anda: ");
			if (!isNumber(input)) {
				throw new Error("Input harus berupa angka (1-100)");
			}
			const tebakan = parseInt(input);
			// cek range
			if (tebakan > 100 || tebakan < 1) {
				throw new Error("Input harus berupa angka (1-100)");
			}

			if (tebakan === target) {
				nTebakan = nTebakan + 1; // nTebakan++
				isTebakanBenar = true;
				console.log(`Tebakan anda benar, jumlah tebakan: ${nTebakan}`);
			}
			if (tebakan > target) {
				nTebakan = nTebakan + 1; // nTebakan++
				console.log("Tebakan anda terlalu besar");
			}
			if (tebakan < target) {
				nTebakan = nTebakan + 1; // nTebakan++
				console.log("Tebakan anda terlalu kecil");
			}
		}
	} catch (error) {
		console.log(error);
	} finally {
		userInput.close();
	}
}
