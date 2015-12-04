/**
 * Created by gorden on 15/12/4.
 */

var Request = require("request");
var http = require("http");
var RouterURL = "http://115.159.100.197/";
//127.0.0.1:3000/?r=index.php?r=default/api/square&callback=123
http.createServer(function (req, resp) {
    var info = "";
    var requrl = require('querystring').parse(req.url,true)["/?r"];
    var url = RouterURL+requrl;
    if(req.method === "GET"){
        Request.get(url).pipe(resp);
    }else{
        req.pipe(Request.post(url)).pipe(resp);
    }
}).listen(3000);