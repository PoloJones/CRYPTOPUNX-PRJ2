const fetch = require('node-fetch');
const router = require("express").Router();
const { User, Post } = require("../models");
// use withAuth middleware to redirect from protected routes.
// const withAuth = require("../util/withAuth");

// example of a protected route
// router.get("/users-only", withAuth, (req, res) => {
//   // ...
// });

//route to display 3 coins on landing page
router.get("/", async (req, res) => {
  try {
    const responseCoin = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY='+ process.env.DB_APIKEY + "&start=1&limit=30&convert=USD"); 
    const {data:coins} = await responseCoin.json();
    console.log(coins);
  
    const responseBTC = await fetch('https://pro-api.coinmarketcap.com/v1/tools/price-conversion?CMC_PRO_API_KEY='+ process.env.DB_APIKEY + "&amount=1&symbol=BTC&convert=USD"); 
    const {data:BTC} = await responseBTC.json();
    console.log(BTC);
    

    const responseETH = await fetch('https://pro-api.coinmarketcap.com/v1/tools/price-conversion?CMC_PRO_API_KEY='+ process.env.DB_APIKEY + "&amount=1&symbol=ETH&convert=USD"); 
    const {data:ETH} = await responseETH.json();
    console.log(ETH);

    const responseUSDT = await fetch('https://pro-api.coinmarketcap.com/v1/tools/price-conversion?CMC_PRO_API_KEY='+ process.env.DB_APIKEY + "&amount=1&symbol=USDT&convert=USD"); 
    const {data:USDT} = await responseUSDT.json();
    console.log(USDT);

    res.render("homepage", {
      title: "Home Page",
      coins,
      BTC,
      ETH,
      USDT,

    });
  } catch (error) {
    console.error(error);
    res.status(500).send("⛔ Uh oh! An unexpected error occurred.");
  }
});


//route to display 3 coin prices and all posts IF logged in on userpage
router.get("/userpage", async (req, res) => {
  try {
    const responseCoin = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY='+ apikey + "&start=1&limit=30&convert=USD"); 
    const {data:coins} = await responseCoin.json();
    console.log(coins);
  
    const responseBTC = await fetch('https://pro-api.coinmarketcap.com/v1/tools/price-conversion?CMC_PRO_API_KEY='+ apikey + "&amount=1&symbol=BTC&convert=USD"); 
    const {data:BTC} = await responseBTC.json();
    console.log(BTC);
    

    const responseETH = await fetch('https://pro-api.coinmarketcap.com/v1/tools/price-conversion?CMC_PRO_API_KEY='+ apikey + "&amount=1&symbol=ETH&convert=USD"); 
    const {data:ETH} = await responseETH.json();
    console.log(ETH);

    const responseUSDT = await fetch('https://pro-api.coinmarketcap.com/v1/tools/price-conversion?CMC_PRO_API_KEY='+ apikey + "&amount=1&symbol=USDT&convert=USD"); 
    const {data:USDT} = await responseUSDT.json();
    console.log(USDT);
  
    //code to display all posts
    const postData = await Post.findAll({
      include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
  });
  // Serialize data so the template can read it
  const posts = postData.map((post) => post.get({ plain: true }));
  
    let user;
    if (req.session.isLoggedIn) {
      user = await User.findByPk(req.session.userId, {
        exclude: ["password"],
        raw: true,
      });
    }
// conflict
    res.render("home", {
      title: "Home Page",

    res.render("userpage", {
      title: "User Page",

      isLoggedIn: req.session.isLoggedIn,
      user,
      posts,
      coins,
      BTC,
      ETH,
      USDT,

    });
  } catch (error) {
    console.error(error);
    res.status(500).send("⛔ Uh oh! An unexpected error occurred.");
  }
});

//route for top 30 coins


//TO-DO check if we need this code modified?
router.get("/login", (req, res) => {
  res.render("login", { title: "Log-In Page" });
});

//TO-DO check if we need this code? I don't think we do.
// router.get("/signup", (req, res) => {
//   res.render("signup", { title: "Sign-Up Page" });
// });

module.exports = router;


