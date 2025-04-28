import express from 'express';
import ItemController from '../controller/itemController.js';
import handleQuery from '../controller/queryController.js';

const router = express.Router();

router.get('/', ItemController.getItems);
router.get('/all', ItemController.getAllItems);

router.post('/query', handleQuery);


export default router;
