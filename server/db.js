const mongoose = require('mongoose');

// const mongoURI = "mongodb://myone1802:myoneapp1802@ac-wgrb17g-shard-00-00.i7ju2gn.mongodb.net:27017,ac-wgrb17g-shard-00-01.i7ju2gn.mongodb.net:27017,ac-wgrb17g-shard-00-02.i7ju2gn.mongodb.net:27017/MYAPPLICATION?ssl=true&replicaSet=atlas-w7701c-shard-0&authSource=admin&retryWrites=true&w=majority";
const mongoURI = "mongodb://myone1802:myoneapp1802@ac-wgrb17g-shard-00-00.i7ju2gn.mongodb.net:27017,ac-wgrb17g-shard-00-01.i7ju2gn.mongodb.net:27017,ac-wgrb17g-shard-00-02.i7ju2gn.mongodb.net:27017/MYAPPLICATION?ssl=true&replicaSet=atlas-w7701c-shard-0&authSource=admin&retryWrites=true&w=majority";

const mongoDB = async()=>{

 await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err)
            console.log("---", err);
        else {
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("fooditems");
            fetched_data.find({}).toArray(function (err, data) {
                const foodCategory = 
             mongoose.connection.db.collection("foodcategory");
                foodCategory.find({}).toArray(function (err, catData){

                    if (err)
                    console.log(err);
                else{
                    global.fooditems = data;
                    global.foodcategory = catData;
                    
                }

                });
                // if (err)
                //     console.log(err);
                // else{
                //     global.fooditems = data;
                //     console.log(global.fooditems);
                // }
                                                   //console.log(data);
            });
        }
    });

}

module.exports = mongoDB;


