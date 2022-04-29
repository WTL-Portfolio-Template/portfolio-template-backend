const Message = require("../models/message");
const { sendMessageEmail } = require("../emails/message");

const createMessage = async (req, res) => {
  const message = new Message(req.body);
  try {
    await message.save();
    sendMessageEmail(
      req.body.email,
      req.body.name,
      req.body.message,
      req.body.phone
    );
    res.status(201).send(message);
  } catch (e) {
    console.log(e);
    res.status(400).send(e.message);
  }
};

const getMessage = async (req, res) => {
  const _id = req.params.id;
  try {
    const message = await Message.findById(_id);
    if (!message) {
      return res.status(404).send({
        message: "Message not found",
      });
    }
    res.send(message);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({});
    res.send(messages);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const deleteMessage = async (req, res) => {
  const _id = req.params.id;
  try {
    const message = await Message.findByIdAndDelete(_id);
    if (!message) {
      return res.status(404).send({
        message: "Message not found",
      });
    }
    res.send(message);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

module.exports = {
  createMessage,
  getMessage,
  getMessages,
  deleteMessage,
};
