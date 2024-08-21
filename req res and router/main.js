const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World2333!");
});

// ----------get request -------
app.post("/", (req, res) => {
  console.log("hey it is a post request");
  res.send("hello world post!");
});
// --------for put request ------
app.put("/", (req, res) => {
  console.log("hey it is a put request");
  res.send("hello world put!");
});
// ---------delete request --------
app.delete("/", (req, res) => {
  console.log("hey it is a delete request");
  res.send("hello world delete!");
});
//--------render the file
app.get("/index", (req, res) => {
  console.log("hey it is a delete request");
  res.sendFile("templates/index.html", { root: __dirname });
});

app.get("/api", (req, res) => {
  res.json({
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    name: ["waqar", "mehdi", "adan", "sadaqat"],
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
