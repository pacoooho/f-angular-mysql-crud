import { Router } from 'express';

import gamesControler from '../controlers/gamesControler'

class GamesRouters {

    public router: Router = Router();

    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/', gamesControler.list);
        this.router.get('/:id', gamesControler.getOne);
        this.router.post('/',gamesControler.create);
        this.router.delete('/:id',gamesControler.delete);
        this.router.put('/:id',gamesControler.update);

    }
}

const gamesRoutes = new GamesRouters();
export default gamesRoutes.router;