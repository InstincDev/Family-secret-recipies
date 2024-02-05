import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

const { GOOGLE_CLIENT_ID } = process.env;
const { GOOGLE_CLIENT_SECRET } = process.env;


// Passport Google Strategy
passport.use(
    new GoogleStrategy(
        {
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
        },
        // Function normally has a cb(callback) property that allows for db user auth
        function (accessToken, refreshToken, profile, done) {
            done(null, {
                id: profile.id,
                displayName: profile.displayName,
                photos: profile.photos,
            });
        }
    )
);

// Functions for using Sessions
passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
