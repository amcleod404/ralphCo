import express from 'express'
import { getProducts, getProductbyID } from '../controllers/productController.js' 

const router = express.Router()

router.route('/').get(getProducts)
router.route('/:id').get(getProductbyID)

export default router;
