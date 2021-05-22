import {Router} from 'express'
import {TokenValidation} from '../libs/verifyToken'
import * as userCtrl from './users.controller'

const router=Router();
router.post('/signup',userCtrl.signup);

router.post('/signin',userCtrl.signin);

router.get('/profile',TokenValidation,userCtrl.profile);

/*
router.get('/users',userCtrl.getUsers);

router.get('/users/:id',userCtrl.getUser);

router.post('/users',userCtrl.createUsers);
router.delete('/users/:id',userCtrl.deleteUser);
router.put('/users/:id',userCtrl.updateUser)
*/
export default router