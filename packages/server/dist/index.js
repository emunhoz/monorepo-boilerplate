"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_1 = __importDefault(require("./api/product"));
const app = (0, express_1.default)();
const port = 3003;
app.use((_req, res, next) => {
    // Allow any website to connect
    res.setHeader("Access-Control-Allow-Origin", "*");
    // Continue to next middleware
    next();
});
app.use("/api/product", product_1.default);
app.get("/api/", (_req, res) => {
    const responseData = {
        payload: 'Hi there'
    };
    res.json(responseData);
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
