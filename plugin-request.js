"use strict"
const { bot } = require("./index")

// 同意好友申请
bot.on("request.friend", e => e.approve())

// 同意群邀请
bot.on("request.group.invite", e => e.approve())

// 同意加群申请，拒绝`e.approve(false)`
bot.on("request.group.add", e => e.approve())
