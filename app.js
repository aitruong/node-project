/**
 * Module dependencies.
 * This is the main file for Node.js
 */
//This is my express framework
var express = require('express');
//this is to handle the http request
var  http = require('http');
//This is to deal with path
var  path = require('path');
var bodyParser = require('body-parser');
//instantiating the express framework
var app = express();
// all environments
app.set('port', process.env.PORT || 3000);
//To take input from the client
//app.use(express.bodyParser());
//#######################
//This means your data can come from client  in the request body as html form data
app.use(bodyParser.urlencoded({extended: false}));
//to read json data from request body 
app.use(express.json());

//ProObject -- >> holding just definition
// ./ ->>> in current directory
var Car=require('./model/car'); //important  - >>>do not give extension
//Car(name,model,make,color,photo)
app.get("/profiles",function(req,res) {
		var car1=new Car("Lexus","IS Rumor","2018","Blue","https://i1.wp.com/www.usautowheels.com/wp-content/uploads/2016/10/2018-Lexus-IS-F-review.jpg");
		var car2=new Car("BMW","M2","2018","Red","http://cdn.bmwblog.com/wp-content/uploads/2017/11/Renderings-BMW-M2-Competition-30.jpg");
		var car3=new Car("Hummer","H3","2018","Black","https://media.ed.edmunds-media.com/hummer/h3/2008/oem/2008_hummer_h3_4dr-suv_h3x_fq_oem_1_500.jpg");
		var car4=new Car("Honda","Civic","2018","Blue","https://di-uploads-development.s3.amazonaws.com/idehondaidefamilyofdealerships/uploads/2017/07/video-fallback-background-1440x760.jpg");
		var car5=new Car("Mazda","CX3","2018","Gray","https://www.dublinmazda.com/wp-content/themes/dublinmazda/images/model-mazda-cx-3-md.jpg");
		 //
		 var carList=[];
		 carList.push(car1);
		 carList.push(car2);
		 carList.push(car3);
		 carList.push(car4);
		 carList.push(car5);
		 res.json(carList);
});






///#####################
//__dirname
app.use(express.static(path.join(__dirname, 'public')));

//Creating http server on port number 3000
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
  console.log("_@_@_@_@_Yeap my server is ready to handle to http request !!!!!!!!!!!!!!!!!!!!!!!");
  console.log("_@_@_@_@_Yeap my server is ready to handle to http request !!!!!!!!!!!!!!!!!!!!!!!");
  console.log("_@_@_@_@_Yeap my server is ready to handle to http request !!!!!!!!!!!!!!!!!!!!!!!");
});
