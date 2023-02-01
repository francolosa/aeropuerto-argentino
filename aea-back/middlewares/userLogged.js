function userLogged(req, res, next) {
    console.log("req.session")
    console.log(req.session)
    if (req.session.email) {
      return next();
    } else {
        return res.status(401).send("Debes estar logueado para acceder");
    }
  }

module.exports =  userLogged;