exports.logout = (req,res)=>{
    req.session.destroy((err)=>{
        if(!err){
            res.status(200).json({error:0, message: "Déconnexion réussie"});
        }
        else {
            res.status(400).json({error:0, message:"Erreur de déconnexion"});
        }
    });
}

exports.signup = (req,res)=>{
    if (req.user) res.status(200).json({error: 0, data: req.user, message: "Inscription réussie"});
    else res.status(400).json({error: 1, message: "Erreur lors de l'inscription"});
}

exports.signin = (req,res)=>{
    if (req.user) res.status(200).json({error: 0, data: req.user});
    else res.status(400).json({error: 1, message: "Erreur lors de la connexion"});
}

exports.checkSession = (req,res)=>{
    res.status(200).json({error: 0, data: req.user});
}