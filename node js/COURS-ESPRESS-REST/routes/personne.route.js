import express from 'express'
import { findAll, findById, remove, save, update } from '../controllers/personne.controller.js'

const router = express.Router()

//on définit une route

router.get('/', findAll)

router.get('/:id', findById)

router.post('/', save)

router.delete('/:id', remove)

router.put('/:id', update)

export default router

