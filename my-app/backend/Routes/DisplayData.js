const express = require('express')
const router = express.Router()
const app = express();

router.post("/foodData", (req, res) => {
    try {
        res.send([global.food_items, global.foodCategory])

    } catch (error) {
        console.log(error.message);
        res.send("server error");

    }
})


router.post("/adminData", (req, res) => {
    try {
        res.send(global.foodordersdata)

    } catch (error) {
        console.log(error.message);
        res.send("server error");

    }
})







module.exports = router; 