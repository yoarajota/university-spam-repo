import express from 'express'
import router from './router.js'
const app = express();

router(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("👍 - Server Running");
})

