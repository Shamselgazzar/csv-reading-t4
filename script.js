console.log("Hello Hello!");
/*
function changeVideo(videoSrc) {
    const videoElement = document.getElementById('videoPlayer');
    const videoSource = document.getElementById('videoSource');

    videoSource.src = videoSrc;
    videoElement.load();
    videoElement.play();
}
*/

console.log('dfdf')


// import { createReadStream } from 'fs';
// import { array } from 'get-stream';
// import parse from 'csv-parse';

// console.log("This is round: 1");

// readCSVData = async (filePath) => {
//   const parseStream = parse({delimiter: ','});
//   const data = await getStream.array(fs.createReadStream(filePath).pipe(parseStream));
//   finalData = data.map(line => line.join(',')).join('\n');
//   console.log(finalData);
//   return finalData;
// }


//const fs = require('fs');
// import fs from 'fs';
// const getStream = require('get-stream');
// const parse = require('csv-parse');

// readCSVData = async (filePath) => {
//   const parseStream = parse({delimiter: ','});
//   const data = await getStream.array(fs.createReadStream(filePath).pipe(parseStream));
//   return data.map(line => line.join(',')).join('\n');
// }

const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);

async function readAndParseCSV() {
    try {
        const csvReading = await readFileAsync('data.csv', 'utf8');
        console.log('Data before parsing: \n'+csvReading+' \n \n Data before parsing:');

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