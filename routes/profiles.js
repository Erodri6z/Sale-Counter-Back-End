import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/:id', checkAuth, profilesCtrl.show)
router.post('/:id', checkAuth, profilesCtrl.create)
router.put('/:id', checkAuth, profilesCtrl.clearCounter)
router.put('/:id', checkAuth, profilesCtrl.update)
// router.put('/:id/add-photo', checkAuth, profilesCtrl.addPho/to)

export { router }
