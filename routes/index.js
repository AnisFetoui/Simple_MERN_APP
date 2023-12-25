var express = require('express');
const { Register, Login, Test, Admin } = require('../controllers/users.controllers');
var router = express.Router();
const passport = require("passport");
const { inRole, ROLES } = require('../security/Rolemiddleware');
const { AddProfile, FindAllProfiles, FindSingleProfile, DeleteProfile } = require('../controllers/profile.controllers');


/* GET home page. */
router.post('/register', Register);
router.post("/login", Login);

// router.get("/test", passport.authenticate("jwt", { session: false }),inRole(ROLES.USER),Test);
// router.get("/admin", passport.authenticate("jwt", { session: false }),inRole(ROLES.ADMIN),Admin);

/* add profile route */
router.post("/profiles", 
passport.authenticate("jwt", { session: false }),
AddProfile);
/* get all profiles */
router.get("/profiles", 
passport.authenticate("jwt", { session: false }),
inRole(ROLES.ADMIN),
FindAllProfiles);
/* get one profiles */
router.get("/profile", 
passport.authenticate("jwt", { session: false }),
FindSingleProfile);
/* delete profiles */
router.delete("/profiles/:id", 
passport.authenticate("jwt", { session: false }),
inRole(ROLES.ADMIN),
DeleteProfile);


module.exports = router;
