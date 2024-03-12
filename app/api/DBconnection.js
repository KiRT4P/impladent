import { createPool } from 'mysql2/promise';

const connection = createPool({
    host: "localhost",
    user: "kirtap",
    password: "Dhg=3xEz",
    database: "impladent",
});




// Attempt to catch disconnects 
connection.on('connection', function (connection) {
    console.log('DB Connection established');

    connection.on('error', function (err) {
        console.error(new Date(), 'MySQL error', err.code);
    });
    connection.on('close', function (err) {
        console.error(new Date(), 'MySQL close', err);
    });

    connection.on('end', function (err) {
        console.error(new Date(), 'MySQL end', err);
    });

    connection.on('enqueue', function () {
        console.log('Waiting for available connection slot');
    });

    connection.on('release', function (connection) {
        console.log('Connection %d released', connection.threadId);
    });

    connection.on('acquire', function (connection) {
        console.log('Connection %d acquired', connection.threadId);
    });


});


module.exports = connection;