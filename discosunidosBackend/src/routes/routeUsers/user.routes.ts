import {Router} from 'express'

import * as userCtrl from './users.controller'

const router=Router();

router.get('/users',userCtrl.getUsers);

router.get('/users/:id',userCtrl.getUser);

router.post('/users',userCtrl.createUsers);
router.delete('/users/:id',userCtrl.deleteUser);
router.put('/users/:id',userCtrl.updateUser)

export default router