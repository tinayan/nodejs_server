"use strict";

const ROOT = "D:/纬创/Wipass";
const DEFAULT_FILE = "index.html";
const SLASH = "/";
const POINT = ".";

let http = require('http');
let url = require("url");
let fs = require("fs");
let path = require("path");

http.createServer(function(req, res) {

	let pathname = url.parse(req.url).pathname;

	if(pathname.lastIndexOf(SLASH) > pathname.lastIndexOf(POINT)) {

		if(!pathname.endsWith(SLASH)) {
			pathname += SLASH;
		}
		pathname += DEFAULT_FILE;
	}

	console.log(url.parse(req.url).pathname);

	fs.readFile(path.join(ROOT, pathname), function(err, file) {
		if(err) {
			res.writeHead(404);
			res.end("找不到相关文件");
			return;
		}

		res.writeHead(200);

		res.end(file);
	});
	
}).listen(3000, "127.0.0.1");