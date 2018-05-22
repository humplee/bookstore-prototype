"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//const server = new mongodb.Server("localhost", 27017);
//const db = new mongodb.Db("mydb", server, {w: 1});
//db.open
/*const Db = require("mongodb").Db;
const    Server = require("mongodb").Server;
//const    ReplSetServers = require("mongodb").ReplSetServers;
const   assert = require("assert");



const db = new Db("integration_test_", new Server("localhost", 30000), {w:0});
db.open(function( err:any, pdb:any) {
    assert.equal(undefined, err);
    pdb.close();
});




*/
var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");
// Connection URL
var url = "mongodb://localhost:27017";
// Database Name
var dbName = "mybookstore";
var db;
// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
    assert.equal(undefined, err);
    // console.log("Connected successfully to server");
    db = client.db(dbName);
});
function getBookInfo(id, cb) {
    findDocuments(db, function (err, booksCollection) {
        if (err) {
            return cb(err);
        }
        else {
            cb(undefined, booksCollection);
        }
    });
}
exports.getBookInfo = getBookInfo;
function getOrderInfo(id, cb) {
    findDocuments2(db, function (err, ordersCollection) {
        if (err) {
            return cb(err);
        }
        else {
            cb(undefined, ordersCollection);
        }
    });
}
exports.getOrderInfo = getOrderInfo;
var findDocuments = function (db, callback) {
    // Get the documents collection
    var collection = db.collection("books");
    // Find some documents
    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, undefined);
        //console.log("Found the following records");
        //console.log(docs)
        callback(undefined, docs);
    });
};
var findDocuments2 = function (db, callback) {
    // Get the documents collection
    var collection = db.collection("orders");
    // Find some documents
    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, undefined);
        //console.log("Found the following records");
        //console.log(docs)
        callback(undefined, docs);
    });
};
function addBook(book1, cb) {
    db.collection("books", function (err, booksCollection) {
        if (err) {
            return cb(err);
        }
        booksCollection.insertOne({
            book1: book1
        }, function (err, result) {
            if (err) {
                return cb(err);
            }
            var book = result.ops[0];
            cb(undefined, book);
        });
    });
}
exports.addBook = addBook;
function addOrderRecord(record1, cb) {
    console.log(record1);
    db.collection("orders", function (err, orderCollection) {
        orderCollection.insertOne({
            record1: record1
        }, function (err, result) {
            if (err) {
                return cb(err);
            }
            var record = result.ops[0];
            cb(undefined, record);
        });
    });
    console.log(record1);
}
exports.addOrderRecord = addOrderRecord;
//# sourceMappingURL=db.js.map