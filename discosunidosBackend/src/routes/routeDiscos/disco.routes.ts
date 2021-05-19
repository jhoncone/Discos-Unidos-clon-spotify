import {Router} from 'express'

import * as discoCtrl from './discos.controller'

const router=Router();

router.get('/discos',discoCtrl.getDiscos);

router.get('/discos/:id',discoCtrl.getDisco);

router.post('/discos',discoCtrl.createDiscos);
router.delete('/discos/:id',discoCtrl.deleteDisco);
router.put('/discos/:id',discoCtrl.updateDisco)

export default router