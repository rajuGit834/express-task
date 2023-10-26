const express = require('express');
const router = express.Router();

router.get("/add-product", (req, res) => {
    res.send('<form method="POST" action="/product"><input type="text" name="value1"></input><button type="submit">Submit</button></form>');
})
router.post("/product", (req, res) => {
    console.log(req.body);
    res.redirect("/");
})
module.exports = router;
