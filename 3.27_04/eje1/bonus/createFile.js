const faker = require('faker');
const fs = require('fs');

export const createFile = (arr) => {
    arr.forEach((item) => {
        fs.appendFile('names.txt', item, function (err) {
            if (err) throw err;
            console.log('Saved! ');
        });
    });
}