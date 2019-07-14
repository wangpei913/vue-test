var express = require('express');
var router = express.Router();
//加载mysql模块
var mysql = require('mysql');
//创建连接
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: '123456',
    database: 'web_database',
    multipleStatements: true // 允许执行多条sql
});
//执行创建连接 
connection.connect();
//SQL语句
const sql = 'select * from jrbac_menu';

router.post('/', function (req, res) {
    connection.query(sql, (err, rows, fields) => {
        const allMenu = rows;
        const ret = [];
        const o = {};
        function add(arr, data) {
            var obj = {
                "id": data.id,
                "parent_id": data.parent_id,
                "url": data.url,
                "childer": []
            };
            o[data.id] = obj;
            arr.push(obj);
        }
        allMenu.forEach(x => {
            if (o[x.parent_id]) {
                add(o[x.parent_id].childer, x);
            } else {
                add(ret, x);
            }
        });
        res.send({
            status: 200,
            result: ret
        })
        res.end();
    })
})

module.exports = router;