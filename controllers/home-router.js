const fetch = require('node-fetch');
const router = require("express").Router();
const { User } = require("../models");
const apikey = "8bd75f8c-d432-4f8c-83de-df36a896d752";
// use withAuth middleware to redirect from protected routes.
// const withAuth = require("../util/withAuth");

// example of a protected route
// router.get("/users-only", withAuth, (req, res) => {
//   // ...
// });

router.get("/", async (req, res) => {
  try {
    const responseBTC = await fetch('https://pro-api.coinmarketcap.com/v1/tools/price-conversion?CMC_PRO_API_KEY='+ apikey + "&amount=1&symbol=BTC&convert=USD"); 
    const dataBTC = await responseBTC.json();
    console.log(dataBTC.data.name);
    console.log(dataBTC.data.quote.USD.price);

    const responseETH = await fetch('https://pro-api.coinmarketcap.com/v1/tools/price-conversion?CMC_PRO_API_KEY='+ apikey + "&amount=1&symbol=ETH&convert=USD"); 
    const dataETH = await responseETH.json();
    console.log(dataETH.data.name);
    console.log(dataETH.data.quote.USD.price);

    const responseUSDT = await fetch('https://pro-api.coinmarketcap.com/v1/tools/price-conversion?CMC_PRO_API_KEY='+ apikey + "&amount=1&symbol=USDT&convert=USD"); 
    const dataUSDT = await responseUSDT.json();
    console.log(dataUSDT.data.name);
    console.log(dataUSDT.data.quote.USD.price);

    let user;
    if (req.session.isLoggedIn) {
      user = await User.findByPk(req.session.userId, {
        exclude: ["password"],
        raw: true,
      });
    }
    res.render("home", {
      title: "Home Page",
      isLoggedIn: req.session.isLoggedIn,
      user,
      dataBTC,
      dataETH,
      dataUSDT,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("⛔ Uh oh! An unexpected error occurred.");
  }
});

router.get("/login", (req, res) => {
  res.render("login", { title: "Log-In Page" });
});

router.get("/signup", (req, res) => {
  res.render("signup", { title: "Sign-Up Page" });
});

module.exports = router;
