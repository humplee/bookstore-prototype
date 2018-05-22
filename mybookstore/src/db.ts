import mongodb = require("mongodb");

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
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "mybookstore";
let db:any;
// Use connect method to connect to the server
MongoClient.connect(url, function(err:any, client:any) {
    assert.equal(undefined, err);
   // console.log("Connected successfully to server");
    db = client.db(dbName);
});



export interface IBook {
    _id: mongodb.ObjectID;
    name: string;
    price: number;
    stock: number;
}
export  interface IOrder {
    _id: mongodb.ObjectID;
    orderRecord:string
}


export function getBookInfo(id:string, cb:(err:any, book?:IBook) => void) {

   findDocuments(db,(err:any,booksCollection:any)=>{
       if (err) {
           return cb(err);
       }
       else {cb(undefined,booksCollection)}
   })
}
export function getOrderInfo(id:string, cb:(err:any, order?:IOrder) => void) {

    findDocuments2(db,(err:any,ordersCollection:any)=>{
        if (err) {
            return cb(err);
        }
        else {cb(undefined,ordersCollection)}
    })
}
const findDocuments = function(db:any, callback:any) {
    // Get the documents collection
    const collection = db.collection("books");
    // Find some documents
    collection.find({}).toArray(function(err:any, docs:any) {
        assert.equal(err, undefined);
        //console.log("Found the following records");
        //console.log(docs)
        callback(undefined,docs);
    });
}
const findDocuments2 = function(db:any, callback:any) {
    // Get the documents collection
    const collection = db.collection("orders");
    // Find some documents
    collection.find({}).toArray(function(err:any, docs:any) {
        assert.equal(err, undefined);
        //console.log("Found the following records");
        //console.log(docs)
        callback(undefined,docs);
    });
}

export function addBook(book1:IBook, cb:(err:any, book?:IBook) => void) {
    db.collection("books", (err:any, booksCollection:any) => {
        if (err) {
            return cb(err);
        }
        booksCollection.insertOne({
           book1
        }, (err:any, result:any) => {
            if (err) {
                return cb(err);
            }
            const book = result.ops[0];
            cb(undefined, book);
        })
    })
}

export function addOrderRecord(record1:IOrder, cb:(err:any, record?:IOrder) => void) {
    console.log(record1);

    db.collection("orders", (err:any, orderCollection:any) => {
        orderCollection.insertOne({
            record1
        }, (err:any, result:any) => {
            if (err) {
                return cb(err);
            }
            const record = result.ops[0];
            cb(undefined, record);
        })
    });
    console.log(record1);
}
