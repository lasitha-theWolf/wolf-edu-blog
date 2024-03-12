import express from 'express';
import {test} from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test', test);

export default router;

//default dammama import kara ganna eke name eka change karnna puluwan