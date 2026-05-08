import express from "express";
// Rest Object
const app = express();

//routes
app.get("/", (req, res) => {
  res.send("<h1>NodeDoc Server is running</h1>");
});

// port
const PORT = 8080;

// run server
app.listen(PORT, () => {
  console.log("Server Running");
});
