import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;

const users = [
  { id: 1, name: "yeasin", email: "khan@example.com" },
  { id: 2, name: "jane", email: "jane@example.com" },
  { id: 3, name: "john", email: "john@example.com" },
  { id: 4, name: "doe", email: "doe@example.com" },
];

app.post("/users", (req, res) => {
  res.send({ success: true, message: "user added successfully" });
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/", (req, res) => {
  res.send("users are coming sooon");
});

app.listen(PORT, () => [console.log(`server is running on poer ${PORT}`)]);
