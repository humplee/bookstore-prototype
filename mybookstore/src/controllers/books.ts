import { Request, Response } from "express";
//import {IBook} from "../db";
//const request = require("express-validator");

import db = require("../db");



 export let getBookpage = (req: Request, res: Response) => {
     res.render("bookmanager/managebookpage", {
         title: "book manager"
     });
 };

export let addbookpage = (req: Request, res: Response) => {
    res.render("bookmanager/addbookpage", {
        title: "add your book"
    });
};
export let showBookPage = (req: Request, res: Response) => {

    db.getBookInfo(req.body,  (err, book: db.IBook) => {
        if (err){ return res.status(500).json({error: err});}
        res.render("bookmanager/managebookpage", {
            bookinfo:book
        });
        console.log(book)
        return undefined;
        //return res.status(201).json(book);
    });



};
export let showOrderPage = (req: Request, res: Response) => {

    db.getOrderInfo(req.body,  (err, order: db.IOrder) => {
        if (err){ return res.status(500).json({error: err});}
        res.render("bookmanager/showorderpage", {
           orderinfo:JSON.stringify(order)
        });


        console.log(order[0].record1)
        return undefined;
        //return res.status(201).json(book);
    });



};



export let postaddbookpage = (req: Request, res: Response) => {


    db.addBook(req.body,  (err, book: db.IBook) => {
        if (err){ return res.status(500).json({error: err});}
       // req.flash("success", {msg: "Profile information has been updated."});
        return res.status(201).json(book);
    });
};
export let getBookListCl = (req: Request, res: Response) => {
    db.getBookInfo(req.body,  (err, book: db.IBook) => {
        if (err){ return res.status(500).json({error: err});}
        return res.status(201).json(book);
    });
};
export let sendOrderToSeverCl = (req: Request, res: Response) => {
    db.addOrderRecord(req.body,  (err, record: db.IOrder) => {
        if (err){ return res.status(500).json({error: err});}
        return res.status(201).json(record);
    });
};
export let index = (req: Request, res: Response) => {
    res.render("home", {
        title: "Home"
    });
};
