const express = require("express");
const app = express();
const passport = require("passport");
const session = require("express-session");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require('cors')
const models = require("./models");

// Charger les variables d'environnement
dotenv.config();

app.use(cors({
    origin: 'http://localhost:8080',
    credentials:true
}));

// Middlewares pour analyser les requêtes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuration de la session
app.use(session({
    secret: process.env.SECRET || "default_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 } // 1 heure
}));

// Initialisation de Passport
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport/passport")(passport, models.user); // Configuration Passport

// Synchronisation de la base de données
models.sequelize.authenticate()
    .then(() => console.log("Connexion à la base de données réussie"))
    .then(() => models.sequelize.sync())
    .catch(err => console.error("Erreur lors de la synchronisation :", err));

// Déclaration des routes
const authRouter = require("./router/user.router")(passport);
app.use("/auth", authRouter);

// Gestion des routes non trouvées
app.use("*", (req, res, next) => {
    const error = new Error("Route non trouvée");
    error.status = 404;
    next(error);
});

// Gestion des erreurs globales
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message });
});

// Lancement du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
