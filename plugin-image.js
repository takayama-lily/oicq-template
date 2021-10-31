"use strict"
const { segment } = require("oicq")
const { bot } = require("./index")

// 回复图片
bot.on("message", function (msg) {
	if (msg.raw_message === "image")
		msg.reply(segment.image("https://sqimg.qq.com/qq_product_operations/im/qqlogo/imlogo.png"))
})

// 回复表情
bot.on("message", function (msg) {
	if (msg.raw_message === "face")
		msg.reply([
			segment.face(101),
			segment.face(102),
			"\ntwo faces"
		])
})
