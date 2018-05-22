import * as React from "react";
import * as ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import Header from "./containers/header";
import { createStore } from "redux";
import "./index.css";
import App from "./App";
//import Hello from "./containers/Hello";
import { Provider } from "react-redux";
//import "bootstrap/dist/css/bootstrap-theme.css";
const reducer = function(state = 0, action: any ) {
   // console.log("reducer...state: ", state, "action: ", action);
    switch (action.type) {
        case "INCREMENT":
            return state + action.payload;

        case "decrement":
            return state - action.payload;

    }
    return state;
};
const store = createStore(reducer);
// console.log("store: ", store);



//step 2 create and dispatch actions
//an action is made by an object that has two properties, type and payload
//type, key words in redux, payload, call it as you wish
store.dispatch({ type: "INCREMENT", payload: 1 });

store.dispatch({ type: "decrement", payload: 1 });
ReactDOM.render(
    <Provider store={store}>
<App/>
    </Provider>,
    document.getElementById("root") as HTMLElement
);


/*import * as React from "react";
import * as ReactDOM from "react-dom";
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "myproject";

function NumberList ( props: any ) {
    const numbers = props.numbers;
    const listItems = numbers.map((number1: any ) =>
        <li key={number1.toString()}>
            {number1}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

let numbers:any;
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById("root")
);

const findDocuments = function(db:any , callback:any) {
    // Get the documents collection
    const collection = db.collection("documents");
    // Find some documents
    collection.find({}).toArray(function(err:any, docs:any) {
        assert.equal(err, undefined);
        //console.log("Found the following records");
       // console.log(docs);
        numbers=docs;
        callback(docs);
    });
};

const insertDocuments = function(db:any , callback:any ) {
    // Get the documents collection
    const collection = db.collection("documents");
    // Insert some documents
    collection.insertMany([
        {a : 1}, {a : 2}, {a : 3}
    ], function(err:any, result:any) {
        assert.equal(err, undefined);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        //console.log("Inserted 3 documents into the collection");
        callback(result);
    });
};
// Use connect method to connect to the server
MongoClient.connect(url, function(err:any, client:any ) {
    assert.equal(undefined, err);
    //console.log("Connected successfully to server");

    const db = client.db(dbName);

    insertDocuments(db, function() {
        findDocuments(db, function() {
            client.close();
        });
    });

});
*/
