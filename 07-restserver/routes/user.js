const { Router } = require('express');
const { usersGet, usersPost, usersPut, usersDelete } = require('../controllers/Users');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const router = Router();

router.get('/', usersGet);

router.post('/', [
     //el check es un middleware donde especificamos que campo del body  queremos validar, ya hace el next() por si solo
    check('name', "name is obligate").not().isEmpty(), //decimos que el campo name no debe estra vacio
    check('password', "password must be more than 6 letters").isLength({min: 6}),
    check('email', "email not validate").isEmail(), 
    check('rol', 'Rol not validate').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    validateFields //si se ejecuta el next() que esta dentro de esta funcion se pasa a ejecutar el post
], usersPost);

router.put('/:id', usersPut);

router.delete('/', usersDelete);


module.exports = router