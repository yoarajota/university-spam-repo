import express from 'express'
import router from './router.js'

import { config } from 'dotenv';

config();
const app = express();

router(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
  console.log("👍 - Server Running");
})

