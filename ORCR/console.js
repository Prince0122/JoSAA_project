var table = [];

var tableElement = document.getElementById("ctl00_ContentPlaceHolder1_GridView1").childNodes[1];
const rows = tableElement.childElementCount - 1;
const cols = 7;

Headings = ["Institute", "Academic Program Name", "Quota", "Seat Type", "Gender", "Opening Rank", "Closing Rank"];
for (var i = 1; i <= rows; i++) {
	table.push({})
	for (var j = 1; j <= cols; j++) {
		if (j == 6 || j == 7) {
			table[i - 1][Headings[j - 1]] = parseInt(tableElement.childNodes[i].childNodes[j].innerText);
		} else {
			table[i - 1][Headings[j - 1]] = tableElement.childNodes[i].childNodes[j].innerText;
		}
	}
}

var element = document.createElement('a');
element.href = "data:text/plain;base64," + btoa(JSON.stringify(table));
element.download = 'table.json'
element.click();