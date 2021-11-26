const express = require("express");
const router = express.Router();
const user = require("../controllers/user");


router.post("/login", user.login);

router.post("/signup", user.signUp);

router.get("/users", user.isSignedIn, user.findAll);

module.exports = router;