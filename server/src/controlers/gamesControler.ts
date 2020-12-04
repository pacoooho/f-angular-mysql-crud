import { Request, Response } from 'express';

import pool from '../database';



class GamesControler {

    public async list(req: Request, res: Response) {
        console.log("list");
        const games = await pool.query('SELECT * FROM games')
        res.json({ games });
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        // console.log("getOne", req.params.id);
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM games WHERE id = ?', [id])
        console.log(games);
        let resultFromDb = Object.values(games)[0]
        console.log("resultFromDb  ", resultFromDb)
        if (games.length > 0) {
            return res.json(games[0]);
        }
        console.log("text", "the game doesn`t exists");

        res.status(404).json({ "text": "the game doesn`t exists" });
    }
  
    public async create(req: Request, res: Response): Promise<any> {
        try {
            console.log("creating");
            console.log(req.body);
            const games = await pool.query('INSERT INTO games set ?', [req.body])

            res.json({ text: `save gamed` })
        } catch (err) {
            console.log(err.code);
            if (err.code === "ER_DUP_ENTRY") {
                console.log("juego existente ", err.code);
                return res.status(404).json({ "text": `the game exists ${err.code}` });
            }
        }

    }

    public async delete(req: Request, res: Response): Promise<void> {
        console.log("delete ", req.params.id);
        const { id } = req.params;
        const games = await pool.query('DELETE FROM games WHERE id = ?', [id])
        console.log(games);
        let resultFromDb = Object.values(games)[1]
        console.log("resultFromDb  ", resultFromDb)
        if (resultFromDb === 1) {
            res.json({ text: `deleting  a game ${req.params.id}` });
        }
        else { res.json({ text: `Not exists a game ${req.params.id}` }); }
    }

    public async update(req: Request, res: Response): Promise<any> {
        console.log("update ", req.params.id);
        const { id } = req.params;
        const games = await pool.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
        console.log(games);
        let resultFromDb = Object.values(games)[1]
        console.log("resultFromDb  ", resultFromDb)
        if (resultFromDb === 1) {
            res.json({ text: `update  a game ${req.params.id}` });
        }
        else { res.json({ text: `Not exists a game ${req.params.id}` }); }
    }


}

const gamesControler = new GamesControler();
export default gamesControler;