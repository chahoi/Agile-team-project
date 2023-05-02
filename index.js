const express = require('express');
const session = require('express-session');
const ejsLayouts = require('express-ejs-layouts');
const passport = require('passport');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.set('view engine', 'ejs');
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 24 * 60 * 60 * 1000,
    },
}));

app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, () => {
    console.log('Server is running on localhost:3000');
});
