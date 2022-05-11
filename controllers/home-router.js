const fetch = require('node-fetch');
const router = require("express").Router();
const { User, Post } = require("../models");
const apikey = "8bd75f8c-d432-4f8c-83de-df36a896d752";
// use withAuth middleware to redirect from protected routes.
// const withAuth = require("../util/withAuth");

// example of a protected route
// router.get("/users-only", withAuth, (req, res) => {
//   // ...
// });

router.get("/", async (req, res) => {
  try {
    const response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY='+ apikey + "&start=1&limit=5&convert=USD");
    const data = await response.json();
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
    res.render("homepage", {
      title: "Home Page",
      isLoggedIn: req.session.isLoggedIn,
      user,
      data,
      posts,
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
