const xlsx = require('xlsx');
const table_json = require('./source/csab2021.json');

const file = xlsx.readFile('./output/ORCR_csab.xlsx');
const table_ws = xlsx.utils.json_to_sheet(table_json);
xlsx.utils.book_append_sheet(file, table_ws);

xlsx.writeFile(file, './output/ORCR_csab.xlsx');