const mysql = require('mysql');

const { host, user, password, database } = require('../config/database.json');

const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database
});

class Database {
    constructor() {
        this.connection = connection;
    }

    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, rows) => {
                if (err) {
                    return reject(err);
                }
                resolve(rows);
            });
        });
    }

    close() {
        return new Promise((resolve, reject) => {
            this.connection.end(err => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    }

    beginTransaction() {
        return new Promise((resolve, reject) => {
            this.connection.beginTransaction(err => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    }

    commit() {
        return new Promise((resolve, reject) => {
            this.connection.commit(err => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    }

    rollback() {
        return new Promise((resolve, reject) => {
            this.connection.rollback(err => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    }

    endTransaction() {
        return new Promise((resolve, reject) => {
            this.connection.endTransaction(err => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    }
}



module.exports = Database;