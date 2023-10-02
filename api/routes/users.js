import express from "express";

import { signin, signup } from '../controllers/users.js'
//import { signin, signup } from "../../client/src/actions/auth.js";

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);

export default router;