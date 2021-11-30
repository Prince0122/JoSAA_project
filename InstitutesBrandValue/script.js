const xlsx = require('xlsx');
const file = xlsx.readFile('./josaa2021sorted.xlsx');
const sheet1 = file.Sheets["Sheet1"];
const Institutes = xlsx.utils.sheet_to_json(sheet1);

iits = [];
nits = [];
iiits = [];
gftis = [];

for (let i = 0; i < Institutes.length; i++) {
	if (Institutes[i].Institute.includes("Indian Institute of Technology")) {	// IITs

		// check if already counted
		let alreadyCounted = false;
		for (let j = 0; j < iits.length; j++) {
			if (Institutes[i].Institute == iits[j].Institute) {
				alreadyCounted = true;
				break;
			}
		}

		if (!alreadyCounted) {
			iits.push(Institutes[i]);
		}
	}
	else if (Institutes[i].Institute.includes("National Institute of Technology") || Institutes[i].Institute.includes("Shibpur")) {	// NITs

		// check if already counted
		let alreadyCounted = false;
		for (let j = 0; j < nits.length; j++) {
			if (Institutes[i].Institute == nits[j].Institute) {
				alreadyCounted = true;
				break;
			}
		}

		if (!alreadyCounted) {
			nits.push(Institutes[i]);
		}
	} else if (Institutes[i].Institute.includes("Institute of Information Technology")) {	// IIITs

		let alreadyCounted = false;
		for (let j = 0; j < iiits.length; j++) {
			if (Institutes[i].Institute == iiits[j].Institute) {
				alreadyCounted = true;
				break;
			}
		}

		if (!alreadyCounted) {
			iiits.push(Institutes[i]);
		}
	} else {	// GFTIs

		let alreadyCounted = false;
		for (let j = 0; j < gftis.length; j++) {
			if (Institutes[i].Institute == gftis[j].Institute) {
				alreadyCounted = true;
				break;
			}
		}

		if (!alreadyCounted) {
			gftis.push(Institutes[i]);
		}
	}
}

const iits_ws = xlsx.utils.json_to_sheet(iits);
const nits_ws = xlsx.utils.json_to_sheet(nits);
const iiits_ws = xlsx.utils.json_to_sheet(iiits);
const gftis_ws = xlsx.utils.json_to_sheet(gftis);
xlsx.utils.book_append_sheet(file, iits_ws);
xlsx.utils.book_append_sheet(file, nits_ws);
xlsx.utils.book_append_sheet(file, iiits_ws);
xlsx.utils.book_append_sheet(file, gftis_ws);

xlsx.writeFile(file, './josaa2021sorted.xlsx');