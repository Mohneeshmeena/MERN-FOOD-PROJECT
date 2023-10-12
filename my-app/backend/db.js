const express = require('express')
const app = express();
const mongoose = require('mongoose');

const mongoDB = () => {
   mongoose.connect("mongodb://mohneeshmeena6267:8120436859@ac-uwvixvg-shard-00-00.5y4msq4.mongodb.net:27017,ac-uwvixvg-shard-00-01.5y4msq4.mongodb.net:27017,ac-uwvixvg-shard-00-02.5y4msq4.mongodb.net:27017/?ssl=true&replicaSet=atlas-jtvezx-shard-0&authSource=admin&retryWrites=true&w=majority")
      .then(async () => {
         // Connection successful logic
         console.log('Connected to MongoDB');
         const foodCollection = await mongoose.connection.db.collection("food_items");
         foodCollection.find({}).toArray(async function (err, data) {
            const categoryCollection = await mongoose.connection.db.collection("foodCategory");
            categoryCollection.find({}).toArray(async function (err, catData) {
               if (err) console.log(err);
               else {
                  global.food_items = data;
                  global.foodCategory = catData;


               }
            })
         });

      })
      .catch((error) => {
         // Connection error handling
         console.log('not Connected to MongoDB');
      });
}

module.exports = mongoDB();