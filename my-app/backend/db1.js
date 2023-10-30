const mongoose = require('mongoose');
const mongoDB = () => {
    mongoose.connect("mongodb://mohneeshmeena6267:8120436859@ac-uwvixvg-shard-00-00.5y4msq4.mongodb.net:27017,ac-uwvixvg-shard-00-01.5y4msq4.mongodb.net:27017,ac-uwvixvg-shard-00-02.5y4msq4.mongodb.net:27017/?ssl=true&replicaSet=atlas-jtvezx-shard-0&authSource=admin&retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((err) => {
            console.error('Error connecting to MongoDB', err);
        });

    const DynamicModel = mongoose.model('dynamic', new mongoose.Schema({},
        { strict: false, collection: 'food_items' })
    );
    DynamicModel.find({})
        .then((Data) => {
            
            global.food_items = Data;

        })
        .catch((err) => {
            console.error('Error retrieving data', err);
        });







    const DynamicModel1 = mongoose.model('dynamic1', new mongoose.Schema({},
        { strict: false, collection: 'foodCategory' })
    );
    DynamicModel1.find({})
        .then((catData) => {
            // Data retrieved from the collection
            global.foodCategory = catData;

        })
        .catch((err) => {
            console.error('Error retrieving data', err);
        });

}




const DynamicModel2 = mongoose.model('dynamic2', new mongoose.Schema({},
    { strict: false, collection: 'orders' })
);
DynamicModel2.find({})
    .then((ordersData) => {
        
        global.foodordersdata = ordersData;
     

    })
    .catch((err) => {
        console.error('Error retrieving data', err);
    });














module.exports = mongoDB();