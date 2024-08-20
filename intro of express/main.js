const express = require("express");
const app = express();
const port = 3000;
app.use(express.static('public'))

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
  res.send("About me");
});
app.get("/contact", (req, res) => {
  res.send("contact me");
});
app.get("/blog", (req, res) => {
  res.send("hellow this is my blog");
});
app.get("/team", (req, res) => {
  res.send("This is my team ");
});
app.get("/team/:slug", (req, res) => {
  res.send(` ${req.params.slug} is my team member. `);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
