import mysql from 'promise-mysql';
import keys from './keys';

const pool = mysql.createPool(keys.database);

// pool.then((r: any) => r.getConnection().then((connection:any)=>{
//     r.releaseConnection(connection);
//     console.log('Conexion exitosa.')
// }));

// export default pool;

pool.getConnection()
    .then(connection  => {
        pool.releaseConnection(connection) ;
    });

    export default pool;