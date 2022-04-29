const express = require("express");

const router = express.Router();

const {
  createMessage,
  getMessage,
  getMessages,
  deleteMessage,
} = require("../controllers/message.controller");

router.post("/", createMessage);
router.get("/:id", getMessage);
router.get("/", getMessages);
router.delete("/:id", deleteMessage);

module.exports = router;
