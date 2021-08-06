"use strict"
const { segment } = require("oicq")
const { bot } = require("./index")

// 发送图片
// 向你的机器人发送 image
bot.on("message", function (e) {
	if (e.raw_message === "image")
		e.reply(segment.image("https://sqimg.qq.com/qq_product_operations/im/qqlogo/imlogo.png"))
})

// 发送表情
// 向你的机器人发送 face
bot.on("message", function (e) {
	if (e.raw_message === "face")
		e.reply([
			segment.face(101),
			segment.face(102),
			segment.text("\ntwo faces")
		])
})
