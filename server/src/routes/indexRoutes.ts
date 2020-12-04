import { Router } from 'express';
import {indexControler} from '../controlers/indexController'
class IndexRouters {
 
    public router: Router = Router();

    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/', indexControler.index);
    }
}

const indexRoutes = new IndexRouters();
export default indexRoutes.router;