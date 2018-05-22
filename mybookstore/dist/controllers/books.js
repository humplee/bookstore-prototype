"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import {IBook} from "../db";
//const request = require("express-validator");
var db = require("../db");
exports.getBookpage = function (req, res) {
    res.render("bookmanager/managebookpage", {
        title: "book manager"
    });
};
exports.addbookpage = function (req, res) {
    res.render("bookmanager/addbookpage", {
        title: "add your book"
    });
};
exports.showBookPage = function (req, res) {
    db.getBookInfo(req.body, function (err, book) {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.render("bookmanager/managebookpage", {
            bookinfo: book
        });
        console.log(book);
        return undefined;
        //return res.status(201).json(book);
    });
};
exports.showOrderPage = function (req, res) {
    db.getOrderInfo(req.body, function (err, order) {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.render("bookmanager/showorderpage", {
            orderinfo: JSON.stringify(order)
        });
        console.log(order[0].record1);
        return undefined;
        //return res.status(201).json(book);
    });
};
exports.postaddbookpage = function (req, res) {
    db.addBook(req.body, function (err, book) {
        if (err) {
            return res.status(500).json({ error: err });
        }
        // req.flash("success", {msg: "Profile information has been updated."});
        return res.status(201).json(book);
    });
};
exports.getBookListCl = function (req, res) {
    db.getBookInfo(req.body, function (err, book) {
        if (err) {
            return res.status(500).json({ error: err });
        }
        return res.status(201).json(book);
    });
};
exports.sendOrderToSeverCl = function (req, res) {
    db.addOrderRecord(req.body, function (err, record) {
        if (err) {
            return res.status(500).json({ error: err });
        }
        return res.status(201).json(record);
    });
};
exports.index = function (req, res) {
    res.render("home", {
        title: "Home"
    });
};
//# sourceMappingURL=books.js.map