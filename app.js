//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")


const app= express();
let items = ["buy foods" , "cook food" , "eat food"];
let workitems=[];
app.set('view engine' , 'ejs');
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

app.get("/" , function(req, res){

let day= date.getDate();


  res.render("list" , {listtitle : day , newlistitems : items});

});

app.post("/" , function(req , res){
  console.log(req.body);
let  item = req.body.newitem;
if(req.body.list === "work list"){
  workitems.push(item);
  res.redirect("/work")
}else{
  items.push(item);
  res.redirect("/");
}



});

app.get("/work" , function(req , res){
  res.render("list" , {listtitle : "work list" , newlistitems : workitems})
});

// app.post("/work" , function(req , res){
//
//   let item = req.body.newitem;
//   works.push(item);
//   res.redirect("/work");
// })
  // console.log(req.body.newitem);
// if(currentDay=== 6 || currentDay=== 0){
//   day="weekday";
//   // res.sendFile(__dirname + "/weekend.html");
//   // res.render("list" , {kindofday : day})
//
// }
//   else{
//     day="working day";
//     // res.sendFile(__dirname + "/working.html")
//     // res.render("list" , {kindofday : day});
//     // res.send();
//   }

// switch (currentDay) {
//   case 0:
//   day = "sunday";
//
//     break;
//     case 1:
//     day = "monday";
//
//       break;
//       case 2:
//       day = "tuesday";
//
//         break;
//         case 3:
//         day = "wednesday";
//
//           break;
//           case 4:
//           day = "thrusday";
//
//             break;
//             case 5:
//             day = "friday";
//
//               break;
//               case 6:
//               day="saturday"
//
//   default:
//   console.log("error: current day iis equal to " + currentDay);
//
// }









app.listen(3000 , function(){
  console.log("hello");
})
