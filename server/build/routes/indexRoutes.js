"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controlers/indexController");
class IndexRouters {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.indexControler.index);
    }
}
const indexRoutes = new IndexRouters();
exports.default = indexRoutes.router;
