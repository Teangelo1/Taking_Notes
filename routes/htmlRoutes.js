// Path Package to get to the files we need
const path = require('path');

// ROUTING 

module.exports = (app) => {
    app.get('/notes', (req, res) =>{
        res.sendFile(path.join(__dirname, '../Develop/public/notes.html'));
    });

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../Develop/public/index.html'));
    });
};