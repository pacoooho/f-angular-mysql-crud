import { Request,Response} from 'express';

class IndexControler {

   public index (req:Request, res:Response)  {
    res.send('hola que tal?');
   }
}

export const indexControler = new IndexControler();