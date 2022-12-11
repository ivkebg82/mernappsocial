import express from 'express'
import {
    getUsers
} from '../Controllers/UserController.js'

const router = express.Router()

router.get('/getUsers', getUsers)








export default router