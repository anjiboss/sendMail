const express = require("express");
const app = express();
const cors = require("cors");
const sendMail = require("./utils/sendMail");

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("You not suppose to request like this ;>");
});

app.post("/api/contact", async (req, res) => {
  sendMail(req.body, () => {
    res.status(200).send("done");
  });
});

const server = app.listen(PORT, () => console.log("Running on " + PORT));
process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(process.exit(1));
});
