import express from "express";

const app = express();

app.use((_, res) => {
  res.end();
});

app.listen(8080);
