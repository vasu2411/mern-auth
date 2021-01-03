const ExtractJwt = require("passport-jwt").ExtractJwt; //JWT extractor from the request
const JWTStrategy = require("passport-jwt").Strategy; //JWT authentication strategy

const User = require("../models/User");
const keys = require("./keys");

const opts = {}; //object literal containing options to control how the token is extracted from the request or verified

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = (passport) => {
  passport.use(
    new JWTStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then((user) => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch((err) => console.log(err));
    })
  );
};
