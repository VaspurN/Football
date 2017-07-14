'use strict'

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const store = {
	localStore : {},
	addItem : function(item){
		this.localStore[item.__id] = item;
		//this.save();
	},
	getItem : function(item){
		return this.localStore[item];
	},
	removeItem : function(item){
		delete this.localStore[item];
		// this.save();
	},
	save : function(){
		localStorage.setItem('item', JSON.stringify(this.localStore));
	},
	load : function(){
		this.localStore = JSON.parse(localStorage.getItem('item'));
	},
}

http.createServer(function(req,res) {

	const parsedUrl = url.parse(req.url);
	var uri = req.url.slice(1);
	console.log(uri);
			
	

	if (uri === 'users') {
		if(req.method === 'POST'){
			var body = '';
			req.on('data', function(data){
				body += data;
				if(body.length > 1e6){
					request.connection.destroy();
				}
			});
			req.on('end', function(){
				var data = JSON.parse(body);
				store.addItem(data);
				console.log("got this from the client");
				console.log(store.localStore);
				res.end("heyhoy");
			});
			return;
		}
		if (req.method === 'PUT') {
				var body = '';
			req.on('data', function(data){
				body += data;
				if(body.length > 1e6){
					request.connection.destroy();
				}
			});
			req.on('end', function(){
				var data = JSON.parse(body);
				if(store.getItem(data.__id)){
					store.addItem(data);
					console.log(store.localStore);
					res.end();
				}				
			});
			return;
		}
	}
	if(uri === "users/all"){
		if (req.method === "GET") {
			res.end(JSON.stringify(store.localStore));
			return;
		}
	}
	
	if(parsedUrl.pathname.indexOf('/users') === 0 && parsedUrl.pathname.length > 7){
			if(req.method === 'GET') {
				//let itemID =parsedQuery.searchtext;
				let itemid = parsedUrl.pathname.slice(7);
				console.log(itemid);
				let found = store.getItem(itemid);	
				console.log(found);
				res.end(JSON.stringify(found));
				return;		
			}

			if (req.method === 'DELETE') {
				let itemid = parsedUrl.pathname.slice(7);
				console.log(itemid);
				let found = store.removeItem(itemid);
				console.log(store.localStore);
				res.end();
				return;
			}
	}	
	fs.readFile(uri,  function(err, file){
			if(err){
				res.writeHead(500, {"Content-Type" : "text/plain"});
				res.write(err + '\n');
				res.end();
				return;
			}
			res.write(file);
			res.end();
		});	
}).listen(3000);

