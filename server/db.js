import {createPool} from 'mysql2/promise';

export const pool = createPool({
    host:'192.168.99.100',
    port:3306,
    user:'root',
    password:'admin1',
    database:'tasksdb'

});


