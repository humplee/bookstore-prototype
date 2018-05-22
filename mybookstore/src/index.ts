import express from "express";
import * as path from "path";
const app = express();
import * as bookController from "./controllers/books";
const bodyParser= require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");


app.get("/", bookController.index);
app.get("/bookmanager/addbookpage",bookController.addbookpage);
app.get("/bookmanager/managebookpage",bookController.showBookPage);
app.get("/bookmanager/showOrderPage",bookController.showOrderPage);
app.get("/getBookListCl",bookController.getBookListCl);
app.post("/sendOrderToSeverCl",bookController.sendOrderToSeverCl);

app.post("/bookmanager/addbooktodb",bookController.postaddbookpage);
export default app;
