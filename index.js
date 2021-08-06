"use strict"
const account = 0

const bot = require("oicq").createClient(account)

bot.on("system.login.qrcode", function (e) {
	this.logger.mark("扫码后按Enter完成登录") //通过扫码二维码登录
	process.stdin.once("data", () => {
		this.login()
	})
})
.on("system.login.error", function (e) {
	if (e.code < 0)
		this.login()
})
.login()

exports.bot = bot

// template plugins
require("./plugin-hello") //hello world
require("./plugin-image") //发送图文和表情
require("./plugin-request") //加群和好友
require("./plugin-online") //监听上线事件
