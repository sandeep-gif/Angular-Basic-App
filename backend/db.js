const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/AngDB', 
{ useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true,useFindAndModify: false}, 
(err) => {
    if(!err){
        console.log('Database Connection Successful')
    }
    else{
        console.log('Error occured while connecting' + err)
    }
})

module.exports = mongoose;





