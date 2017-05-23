const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5434/cssp';

router.get('/', function(req, res, next){
    console.log("******************************"+__dirname)
    res.sendFile(path.join(
    __dirname, '..', '..', 'index.html'));
});

router.get('/api/v1/campusResource', function(req, res, next){
    const results = [];
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, function(err, client, done){
        // Handle connection errors
        if(err) {
            done();
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }
        // SQL Query > Select Data
        const query = client.query('SELECT * FROM campus_resource ORDER BY id ASC;');
        // Stream results back one row at a time
        query.on('row', function(row){
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', function(){
            done();
            return res.json(results);
        });
    });
});


module.exports = router;