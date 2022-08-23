import express from 'express';

import { getAll, getWeather, createWeather, deleteAll } from '../controllers/weather.js';

const router = express.Router();

router.delete('/deleteAll', deleteAll);
router.post('/create', createWeather);
router.get('/', getAll);
router.get('/getWeather', getWeather);

export default router;