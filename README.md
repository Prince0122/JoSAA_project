# JoSAA_project
Program to fetch data from josaa and similar websites

This program runs on nodejs dependency `xlsx`. To install, run `npm i xlsx`

Steps to follow:<br>
--> Visit "Opening and Closing Ranks" page on josaa.nic.in or csab.nic.in<br>
--> Once you have your required table displayed, run the script in `console.js` in browser's console.<br>
(This will fetch all the displayed data from browser and will save it as a JSON file)<br>
--> Place the generated `table.json` file in `source` folder. (make sure to rename it to follow the conventions)<br>
--> Accordingly edit the path of source and output file in `json_to_excel.js` and execute it.<br>
(This will convert JSON file into more readable and useful excel spreadsheet)<br>
DONE!!!
