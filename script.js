console.log("Hello Hello!");

const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);

async function readAndParseCSV() {
    try {
        const csvReading = await readFileAsync('data.csv', 'utf8');
        console.log('Data before parsing: \n'+csvReading+' \n \n Data afterr parsing:');

        const data = parseCSV(csvReading);
        console.log(data);
    } catch (err) {
        console.error('Error reading or parsing CSV file:', err);
    }
}
function parseCSV(csvText) {
    const rows = csvText.split('\r\n');
    const header = rows[0].split(',');
    const data = [];
    
    for (let i = 1; i < rows.length; i++) {
        const values = rows[i].split(',');
        if (values.length === header.length) {
            const entry = [];
            for (let j = 0; j < header.length; j++) {
                entry[header[j]] = values[j];
            }
            data.push(entry);
        } }
    
    return data;
}


readAndParseCSV();