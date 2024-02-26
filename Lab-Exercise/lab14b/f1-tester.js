const express = require('express');
const supa = require('@supabase/supabase-js');
const app = express();

const supaUrl = 'https://oszcradjipmbbbuhmqjj.supabase.co';
const supaAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zemNyYWRqaXBtYmJidWhtcWpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczMzE5MzYsImV4cCI6MjAyMjkwNzkzNn0.Bq4GiKABlMnq8QfHDXvkHF6Rzj9dEiAuHnx8wTEyry4';

const supabase = supa.createClient(supaUrl, supaAnonKey);

app.get('/f1/qualifying/:race', async (req, res) => {
    const {data, error} = await supabase
    .from('qualifying')
    .select('qualifyId, position, q1, q2, q3, races (name,year),drivers (surname,forename),constructors (name)')
    .eq('raceId',req.params.race)
    .order('position',{ ascending: true })
    ;

    if (error) {
        console.error('Error fetching data:', error.message);
        return;
    }

    if (data.length === 0) {
       return res.json({error:`Error no data found for ${req.params.race}`})
    }

    res.send(data);
});

app.get('/f1/races/:start/:end', async (req, res) => {
    const {data, error} = await supabase
    .from('races')
    .select('*')
    .gte('year',req.params.start) //greater than or equal to
    .lte('year',req.params.end) // less than or equal to
    .order('year',{ ascending: true })
    ;

    if (error) {
        console.error('Error fetching data:', error.message);
        return;
    }

    if (data.length === 0) {
        return res.json({error:`Error no data found for ${req.params.start} and ${req.params.end}`})
    }

    res.send(data);
});


app.get('/f1/drivers/name/:surname/limit/:limitVal', async (req, res) => {
    const {data, error} = await supabase
    .from('drivers')
    .select('*')
    .ilike('surname', `${req.params.surname}%`) // This will only find 
    .order('surname',{ ascending: true })
    .limit(req.params.limitVal);

    if (error) {
        console.error('Error fetching data:', error.message);
        return;
    }

    if (data.length === 0) {
        return res.json({error:`Error no data found for ${req.params.surname}`})
    }

    res.send(data);
});




app.listen(8080, () => {
    console.log('listening on port 8080');
    console.log('Eg) for finding qualifying races with raceID')
    console.log(' http://localhost:8080/f1/qualifying/1034');
    
    console.log('Eg) for finding all races with Start and End year range')
    console.log('http://localhost:8080/f1/races/2020/2022');
    
    console.log('Eg) for finding Drivers who surnames begin with certain characters and only find certain selection')
    console.log('http://localhost:8080/f1/drivers/name/sch/limit/12');
}); 