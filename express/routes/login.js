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
const sql = 'select * from user_reg where user_name = ?';

router.post('/', function (req, res) {
    let params = req.body;
    connection.query(sql, params.name, (err, result) => {
        if (err) {
            throw err;
        } else {
           if (result.length === 0) {
               res.send({
                   status: 404,
                   msg: '该用户尚未注册'
               })
               res.end();
           } else {
               let response = result[0];
               if (response.user_name === params.name && response.pass_word === params.password) {
                   res.send({
                       status: 200,
                       result: {
                           name: response.user_name,
                           type: response.customer_type,
                           description: response.user_description
                       },
                       msg: '登录成功'
                   })
                   res.end()
               } else {
                   res.send({
                       status: 404,
                       msg: '用户名或者密码错误'
                   })
                   res.end();
               }
           }
        }
    })
})

module.exports = router;