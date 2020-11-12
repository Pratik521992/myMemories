const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const { Birthdays } = require("../models/Birthdays");
const { auth } = require("../middleware/auth");

router.post("/addBirthday", (req, res) => {
  const birthday = new Birthdays(req.body);

  birthday.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      Data: "Birthday Added Successfully",
    });
  });
});

router.get("/getMemories", auth, (req, res) => {
  const userId = req.query._id;
  console.log(userId)
  Birthdays.find({ writer: mongoose.Types.ObjectId(userId) }, (err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({
      success: true,
      Data: doc,
    });
  });
});

router.get("/getWishes", (req, res) => {
  Birthdays.find(
    { email: req.query.email, pagination: req.query.pagination },
    { wishes: "", writerName: "" },
    (err, docs) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true,
        Data: docs,
      });
    }
  );
});

module.exports = router;
