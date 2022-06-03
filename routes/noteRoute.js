const express = require("expres");
const { Router } = require("express");
const { model } = require("mongoose");
const router = express.Router();
const Note = require("../models/noteModel");

router.route("/create").post((req, re) =>{

    const title = req.body.title;
    const content = req.body.content;
    const newNote = new Note({
        title,
        content
    });
newNote.save();

})


model.exports = router;