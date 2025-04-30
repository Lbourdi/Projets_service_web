const express = require("express");
const router = express.Router();
const authController = require("../controllers/authcontroller");

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    else return res.status(401).json({ message: "Non authentifié" });
}

module.exports = (passport) => {
    router.post("/signup", passport.authenticate("local-signup"), authController.signup);
    router.post("/signin", passport.authenticate("local-signin"), authController.signin);
    router.get("/logout", isLoggedIn, authController.logout);
    router.get('/check-session', isLoggedIn, authController.checkSession);

    return router;
};
