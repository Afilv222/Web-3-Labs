const path = require("path");
// the verbose is optional but gives better error messages
const sqlite3 = require("sqlite3").verbose(); 

// open the database
//If you copied the starting code, you should have a folder named data with the sqlite database file in it
const DB_PATH = path.join(__dirname, "data/art.db");
const db = new sqlite3.Database(DB_PATH);


let sql = `SELECT GenreID,GenreName,EraID,Description,Link
 FROM Genres;`;
// retrieve all the data into memory
db.all(sql, [], (err, rows) => {
 if (err) {
 throw err;
 }
 rows.forEach( genre => {
 console.log(genre.GenreName);
 });
});
// close the database
db.close();