#!/usr/bin/node

const express = require('express'),
          app = express(),
       router = express.Router(),
         http = require('http'),
           fs = require('fs'),
           qs = require("querystring"),
        mysql = require('mysql'),
          url = require("url");
         path = require('path')

var users = {};
app.use('/', login);

http.createServer((req,res)=>{
    var url = require.url;
    switch(url) {
        case '/':
            response.writeHead(200,{'Content-Type':'text/html'});
            fs.readFile('../login.html','utf-8',function(err,data){
                if(err){
                    throw err ;
                }
                response.end(data);
            });
            break;
        case '../login':
            if(req.url != '/') {
                console.error(err,exit(1));
                return;
            }
            else if(req.username == 'admin' && req.pwd == 'admin'){
                console.log();
                fs.readFile('../login.html', function userNamePasswd(str){
                    var msg = str.split(' ');
                    assert.equal(msg.length, 2, 'must to be 2');
                    assert.equal(msg[0], 'Basic', 'must to be Basic');
                  
                    var account = Buffer.from(msg[1], 'base64');
                    msg = account.toString('utf8').split(':');
                  
                    return {
                      userName: msg[0],
                      pwd: msg[1]
                    };
                })
            };
            break;
        case '../list':
            fs.readFile('../chapterList.js',function(readlist){
                var blogmess = {
                    title:req.chapterList.chapterName,
                    content: req.chapterList.chapterContent
                };
                var blog = new Blog(blogmess);
                blog.save(function (err, data){
                    if (err){
                        res.send(err);
                    }else{
                        res.redirect('/addChapter');
                    }
                });
            });

        case '../chapter':
            router.get('../chapter', function (req, res) {
            var contentId = req.query. contentId || '';
            Content.findOne({
                _id: contentId
            }).then(function (content) {
                console.log(data)
                data.content = content;
                res.render("../chapter",data);
            })
        
        });
        module.exports = router;
        case '../chapterList':
            
        case '../addChapter':
            router.get('../chapterList', (req, res) => {
                chapterList.find().sort({_id: -1}).then((chapterList) => {
                    res.render('../chapterList', {
                        chapterName,chapterContent
                    })
                })
            });
        default:
            console.log('error');

        
    }
    
    //输入密码
    function sendSecretMsg(req, res) {
        if(req.headers.authorization) {
          var usr = userNamePasswd(req.headers.authorization);
          console.log('\nauth:', usr);
      
          if(usr.userName === 'admin' && usr.pwd === 'admin') {
            res.end('OK!');
            return;
          }
        } 
    }
    //错误信息
    function sendErrorMsg(res) {
        res.statusCode = 404;
        res.end('error');
    }
        
}).listen(8083);