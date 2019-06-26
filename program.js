var express = require('express');
var app = express();


var productsController=function(req, res){
  console.log("Invoking  rest api for product list");
  var products = [
    {ProductId:101, ProductName:"MotoG5plus", Manufacturer:"Lenovo", Price:15000},
    {ProductId:102, ProductName:"Redmi Note5", Manufacturer:"Mi", Price:18000},
    {ProductId:103, ProductName:"Samsung a50",Manufacturer:"Samsung", Price:25000}
  ];
  res.send(products);
};
 


app.get('/products',productsController);

var server = app.listen(8087, function () {
  console.log("Example app listening at http://localhost:8087")
})