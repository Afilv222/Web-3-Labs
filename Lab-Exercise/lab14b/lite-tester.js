const path = require("path");
// the verbose is optional but gives better error messages
const sqlite3 = require("sqlite3").verbose(); 

// open the database
//If you copied the starting code, you should have a folder named data with the sqlite database file in it
const DB_PATH = path.join(__dirname, "data/art.db");
const db = new sqlite3.Database(DB_PATH);


let sql = `SELECT GenreID,GenreName,EraID,Description,Link FROM Genres;`;
// retrieve all the data into memory
db.all(sql, [], (err, rows) => {
 if (err) {
 throw err;
 }
 rows.forEach( genre => {
 console.log(genre.GenreName);
 });
});


// only put a row at a time into memory
// Instead of reading the entire table into memory (which would be very memory intensive if the table was large), the callback gets called for each record.
sql = `SELECT ArtistID,FirstName,LastName FROM Artists WHERE NATIONALITY=? ;`;
const params = ['France'];
db.each(sql, params, (err, artist) => {
 if (err) {
 throw err;
 }
 console.log(`${artist.FirstName} ${artist.LastName}`);
}); 



// now get just a single record
sql = `SELECT PaintingID,Title FROM Paintings where PaintingID=?;`;
db.get(sql, [501], (err, painting) => {
 if (err) {
 throw err;
 }
 console.log('**** ' + painting.Title);
}); 



// close the database
db.close();