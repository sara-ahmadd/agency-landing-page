import express from "express";
import path from "path";

const app = express();

import bodyParser from "express";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const port = 8080;
const host = "localhost";

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.use(express.static("website"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "index.html"));
});

app.listen(port, host, () => {
  console.log(`Server Is Running On Port : ${port}`);
});
