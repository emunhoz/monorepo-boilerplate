"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json({
            status: 200,
            message: "Get data has successfully",
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
}));
exports.default = router;
