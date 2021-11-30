const xlsx = require('xlsx');
const table_json = require('./source/josaa2021.json');

const file = xlsx.readFile('./output/ORCR_josaa.xlsx');
const table_ws = xlsx.utils.json_to_sheet(table_json);
xlsx.utils.book_append_sheet(file, table_ws);

xlsx.writeFile(file, './output/ORCR_josaa.xlsx');