const express = require("express");
const path = require('path');

const router = express.Router();

router.get("/", (req, res, next) => {
    console.log("router is work")
    res.sendFile(path.join(__dirname, '../public/view/chatroom/index.html'));
});

module.exports = router;