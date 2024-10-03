const express = require("express");
const app = express();

app.use(express.static("public"))
// middleware 1
app.use((req, res, next) => {
  console.log("middleware one");
  res.send("hacked by middleware one ");
  next();
});

// middleware 2
app.use((req, res, next) => {
  console.log("middleware two");
  res.send("hacked by middleware two ");
  next();
});

// Define a route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.get("/contact", (req, res) => {
  res.send("Contact");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
