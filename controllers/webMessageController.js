import webMessageModel from "../models/webMessageModel.js";
// create message
export const createMessage = async (req, res) => {
  try {
    const { name, contact, message } = req.body;
    if (!name || !contact || !message) {
      return res.status(402).send({
        success: false,
        message: "Please provide all Fields",
      });
    }
    const webMessage = new webMessageModel({ name, contact, message });
    webMessage.save();
    res.status(201).send({
      success: true,
      message: "Your message created successfully",
      webMessage,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Web Message Api",
      error,
    });
  }
};

// get All messages
export const getAllMessages = async (req, res) => {
  try {
    const webMessages = await webMessageModel.find({});

    res.status(201).send({
      success: true,
      message: "All web messages",
      totalCount: webMessages.length,
      webMessages,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Web Message Api",
      error,
    });
  }
};

// delete message
export const deleteWebMessage = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Please provide message id",
      });
    }
    // find message
    const webMessage = await webMessageModel.findByIdAndDelete(id);
    res.status(201).send({
      success: true,
      message: "Message has been deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in deleting web messages api",
      error,
    });
  }
};
