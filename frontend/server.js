const express = require("express");

const app = express();
app.use(express.json());

app.post("/learner", (req, res, next) => {
  if (!req.body) {
    return res.status(400).send({ message: "data not extracted" });
  }
  console.log("learner:--------", req.body);
  res.status(201).send({ message: "user created." });
});

app.post("/instructor", (req, res, next) => {
  if (!req.body) {
    return res.status(400).send({ message: "data not extracted" });
  }
  console.log("instructor:--------", req.body);
  res.status(201).send({ message: "user created." });
});

app.post("/signin", (req, res, next) => {
  if (!req.body) {
    return res.status(400).send({ message: "data not extracted" });
  }
  console.log(req.body);
  res.status(201).send({ message: "login successful." });
});

app.get("/", (req, res, next) => {
  console.log("coursefinity backend");
  res.send("coursefinity backend");
});

app.listen(5050);
