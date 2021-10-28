var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);




 router.post("/", async (req, res) => {
    let error;
    let status;
    try {
      const { token,amount,items } = req.body;
      console.log("ITEMS:", items)
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
      });
  
      const idempotencyKey = uuidv4();
      const charge = await stripe.charges.create (
        {
          
          amount: amount * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: items.toString(),
          shipping: {
            name: token.card.name,
            address: {
              line1: token.card.address_line1,
              line2: token.card.address_line2,
              city: token.card.address_city,
              country: token.card.address_country,
              postal_code: token.card.address_zip
            }
          }
        },
        {
          idempotencyKey,
        }
      );
      console.log("Charge:", {charge});
      status = "success";
      
    } catch (error) {
      console.error("Error:", error);
      status = "failure";
    }
    
    res.json({error, status});
  
  }); 


module.exports = router;