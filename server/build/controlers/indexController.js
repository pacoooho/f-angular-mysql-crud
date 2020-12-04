"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexControler {
    index(req, res) {
        res.send('hola que tal?');
    }
}
exports.indexControler = new IndexControler();
