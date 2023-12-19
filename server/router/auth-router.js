const express = require('express');
const controller = require('../controller/auth-controller')
const router = express.Router();
const registration = require('../validators/auth-validators');
const validate = require('../middlewares/validator-middleware');


router.route("/").get(controller.home);

router.route("/register").post(validate(registration),controller.register);

router.route("/login").post(controller.login);



module.exports = router