import router from "./routers/routers.js"
import express from "express";
import cors from "cors";
import process from "process";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from 'dotenv'

dotenv.config()
const app = express();
const port = process.env.PORT || 3000;
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(cors());

// Ruta de archivos estáticos
app.use(express.static('public'))

// Ruta de las views
app.set('views', join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(router);


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

