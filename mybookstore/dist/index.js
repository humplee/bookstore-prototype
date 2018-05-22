"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path = __importStar(require("path"));
var app = express_1.default();
var bookController = __importStar(require("./controllers/books"));
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.get("/", bookController.index);
app.get("/bookmanager/addbookpage", bookController.addbookpage);
app.get("/bookmanager/managebookpage", bookController.showBookPage);
app.get("/bookmanager/showOrderPage", bookController.showOrderPage);
app.get("/getBookListCl", bookController.getBookListCl);
app.post("/sendOrderToSeverCl", bookController.sendOrderToSeverCl);
app.post("/bookmanager/addbooktodb", bookController.postaddbookpage);
exports.default = app;
//# sourceMappingURL=index.js.map