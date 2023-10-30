const express = require('express')
const router = express.Router()
const app = express();
const Order = require('../models/Orders')

router.post("/orderData", async (req, res) => {

    let data = req.body.order_data
    await data.splice(0, 0, { order_date: req.body.order_date })

    let eID = await Order.findOne({ email: req.body.email })
    if (eID === null) {
        try {
            await Order.create({
                email: req.body.email,
                order_data: [data]
            }).then(() => {
                res.json({ success: true })
            })
        } catch (error) {
            console.log(error.message)
            res.send(error.message)
        }

    }
    else {


        try {
            await Order.findOneAndUpdate({ email: req.body.email },
                { $push: { order_data: data } }
            ).then(() => {
                res.json({ success: true })
            })

        }
        catch (error) {

            res.send(error.message)
        }


    }

})

router.post('/myorderData', async (req, res) => {
    try {
        console.log(req.body.email)
        let odata = await Order.findOne({ 'email': req.body.email })
        res.json(odata)

    } catch (error) {
        res.send("Error", error.message)
    }



})









module.exports = router; 