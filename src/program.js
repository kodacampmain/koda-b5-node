export function sebuahProgram(kondisi) {
	if (typeof kondisi != "boolean") {
		console.log("Gagal, tidak sesuai kondisi");
		return;
	}
	return "Program Berjalan";
}

export function sebuahProgramModifikasi(kondisi) {
	if (typeof kondisi != "boolean") {
		const error = new Error("Gagal, tidak sesuai kondisi");
		throw error;
	}
	return "Program Berjalan";
}

// a === b;
// foo === true;
// 1 == 1;
// c == null;
