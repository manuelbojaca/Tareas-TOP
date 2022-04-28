const faker = require('faker');
const fs = require('fs');

var newName;

for(let i = 1;i < 999; i++){
    newName = i + '. ' + faker.name.findName() + '\n';    
    fs.appendFile('names.txt', newName, function (err) {
        if (err) throw err;
        console.log('Saved! ');
    });
}