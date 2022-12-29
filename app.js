const express = require('express') ; 
const bodyParser = require('body-parser')
const app = express() ; 
var adds =["cd","dcd"];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.get('/', (req, res) => {  

    var date = new Date()
    var today =date.getDay();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  res.render("ejss", {send_data : weekday[today], add_p : adds});

});  
app.post("/" ,(req,res) => 
{
    var add1 = req.body.add_input;
    adds.push(add1);
console.log(adds);
    res.redirect("/");
    res.render("ejss", {add_p :adds});
});
 
app.listen(3000, function() {  

  console.log(`Example app listening on port 3000`) ; 

});  