const { validationResult } = require('express-validator');


const validateFields = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){ //si hay errores
        return res.status(400).json(errors)
    }
    next(); //si no hay errores entonces se ejecuta este next()
}

module.exports = {
    validateFields
}