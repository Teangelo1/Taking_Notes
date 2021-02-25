const noteText = require('../Develop/db/db.json');
const fs = require('fs')
const uuid = require("uuid");

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(noteText));


    app.post('/api/notes', (req, res) => {
        const newTitle = req.body;
        
        newTitle.id = uuid.v4();

        noteText.push(newTitle);
        console.log(noteText);
        // res.json(newTitle);

        uuid.v4();

        fs.writeFile('./Develop/db/db.json', JSON.stringify(noteText, null, 2), (err) => {
            if (err) throw err;
            console.log("error");
        });
        // console.log("new note");
        // return res.json(newTitle);
        res.end();
    });

}