import { Router } from "express";
import passport from "passport";
const router = Router();
const { CLIENT_URL } = process.env;

router.get("/login/failed", (req, res) => {
    res.status(401).json({ success: false, message: "failure to login" });
});

router.get("/login/success", (req, res) => {
    if (req.user) {
        console.log(req.user);
        res.status(200).json({
            success: true,
            message: "successful login",
            user: req.user,
            // cookies: req.cookies
        });
    } else {
        res.status(200).json({
            success: false,
            message: "unsuccessful login",
        });
    }
});

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(CLIENT_URL);
});

// Google client request
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

//Google callback function
router.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: CLIENT_URL,
        failureRedirect: "/login/failed",
    })
);

export default router;
