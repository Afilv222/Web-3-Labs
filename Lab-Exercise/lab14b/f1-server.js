const express = require('express');
const supa = require('@supabase/supabase-js');
const app = express();

const supaUrl = 'https://oszcradjipmbbbuhmqjj.supabase.co';
const supaAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zemNyYWRqaXBtYmJidWhtcWpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczMzE5MzYsImV4cCI6MjAyMjkwNzkzNn0.Bq4GiKABlMnq8QfHDXvkHF6Rzj9dEiAuHnx8wTEyry4';

const supabase = supa.createClient(supaUrl, supaAnonKey);

//Rather than constructing SQL statements and “sending” them to the DBMS, you instead make use of a query builder API

app.get('/f1/status', async (req, res) => {
    const {data, error} = await supabase
    .from('status')
    .select();

    res.send(data);
});

//So what is this code doing? It is using supabase’s API to run the following query: SELECT * FROM seasons.
app.get('/f1/seasons', async (req, res) => {
    const {data, error} = await supabase
    .from('seasons')
    .select(); // if you leave this blank that means you are getting everything 
    res.send(data);
});


app.get('/f1/races', async (req, res) => {
    
    const {data, error} = await supabase
    .from('races')
    .select(`raceId, year, round, circuitId, name`)//Here we are specifying only these five fields
    .eq('year',2020) // This is adding a filter ,This is equivalent to “WHERE year=2020
    .order('round', { ascending: false }); // This is adding a filter ,ORDER BY round DESC” in SQL

    res.send(data);
});



app.listen(8080, () => {
    console.log('listening on port 8080');
    console.log('http://localhost:8080/f1/status');
}); 
   