const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();

const path = __dirname + "/views/";

router.get("/", (req, res) => {
  res.send("Hello from server");
});

router.get("/login", (req, res) => {
  res.sendFile(path + "login.html");
});

router.post("/login", (req, res) => {
  console.log(req.body);
  return req.body.username === "ivaylo" && req.body.password === "password"
    ? res.status(200).send("User logged in")
    : res.status(401).send("Bad user/pass");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path));
app.use("/", router);

app.listen(3001, () => {
  console.log(`App is listening on port ${3001}`);
});
