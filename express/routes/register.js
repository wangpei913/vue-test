var express = require('express');
var router = express.Router();
var URL = require('url');
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
const sql = 'select * from user_reg where user_name = ?';
const insertSql = `insert into user_reg (user_name, pass_word, customer_type, user_description) values (?, ?, ?, ?);`;

router.post('/', function (req, res) {
    let params = req.body;
    connection.query(sql, params.name, (err, result) => {
        if (err) {
            throw err;
        } else {
            if (result.length !== 0) {
                res.send({
                    status: 404,
                    msg: '用户已存在'
                })
                res.end();
            } else {
                const userinfo = [params.name, params.password, params.type, params.desc];
                connection.query(insertSql, userinfo, (err, data) => {
                    if (err) throw err;
                    else {
                        res.send({
                            status: 200,
                            msg: '注册成功'
                        })
                        res.end();
                    }
                })
            }
        }
    })
})

module.exports = router;