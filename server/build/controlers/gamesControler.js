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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesControler {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("list");
            const games = yield database_1.default.query('SELECT * FROM games');
            res.json({ games });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log("getOne", req.params.id);
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT * FROM games WHERE id = ?', [id]);
            console.log(games);
            let resultFromDb = Object.values(games)[0];
            console.log("resultFromDb  ", resultFromDb);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            console.log("text", "the game doesn`t exists");
            res.status(404).json({ "text": "the game doesn`t exists" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("creating");
                console.log(req.body);
                const games = yield database_1.default.query('INSERT INTO games set ?', [req.body]);
                res.json({ text: `save gamed` });
            }
            catch (err) {
                console.log(err.code);
                if (err.code === "ER_DUP_ENTRY") {
                    console.log("juego existente ", err.code);
                    return res.status(404).json({ "text": `the game exists ${err.code}` });
                }
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("delete ", req.params.id);
            const { id } = req.params;
            const games = yield database_1.default.query('DELETE FROM games WHERE id = ?', [id]);
            console.log(games);
            let resultFromDb = Object.values(games)[1];
            console.log("resultFromDb  ", resultFromDb);
            if (resultFromDb === 1) {
                res.json({ text: `deleting  a game ${req.params.id}` });
            }
            else {
                res.json({ text: `Not exists a game ${req.params.id}` });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("update ", req.params.id);
            const { id } = req.params;
            const games = yield database_1.default.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
            console.log(games);
            let resultFromDb = Object.values(games)[1];
            console.log("resultFromDb  ", resultFromDb);
            if (resultFromDb === 1) {
                res.json({ text: `update  a game ${req.params.id}` });
            }
            else {
                res.json({ text: `Not exists a game ${req.params.id}` });
            }
        });
    }
}
const gamesControler = new GamesControler();
exports.default = gamesControler;
