"use strict"
const { bot } = require("./index")

// hello world
// 向你的机器人发送 hello
bot.on("message", function (e) {
	if (e.raw_message === "hello")
		e.reply("hello world")
})
