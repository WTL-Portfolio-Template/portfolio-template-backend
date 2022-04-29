const express = require("express");
require("./db/mongoose");
const messageRouter = require("./routers/message.router");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use("/messages", messageRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
