const mongoose = require('mongoose');




mongoose.connect("mongodb://127.0.0.1:27017/mongodb_chitkara_form")
.then(function(){
    console.log(" this is running successfully");
})
.catch(function(error){
    console.log(error);

});

const user = new mongoose.Schema({
   name:{
       type:String
   },
   phone:{
       type:String
   },
   email:{
       type:String
   },
   time:{
       type:String
   }
   ,
   address:{
       type:String
   }
   ,
   date:{
       type:String
   }





})




const Product = mongoose.model('Product', user);



module.exports=Product;
