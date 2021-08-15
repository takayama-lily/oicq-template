"use strict"
const { bot } = require("./index")

// 收到好友申请
bot.on("request.friend.add", async function (e) {
	// 同意
	await this.setFriendAddRequest(e.flag)
	this.sendPrivateMsg(e.user_id, "我们已经是好友啦，一起来聊天吧！")
	// 拒绝
	// this.setFriendAddRequest(e.flag, false)
})

// 收到群邀请
bot.on("request.group.invite", async function (e) {
	// 同意
	await this.setGroupAddRequest(e.flag)
	this.sendGroupMsg(e.group_id, "大家好，我是" + this.nickname)
	// 拒绝
	// this.setGroupAddRequest(e.flag, false)
})

// 收到加群申请
bot.on("request.group.add", async function (e) {
	// 同意
	await this.setGroupAddRequest(e.flag)
	this.sendGroupMsg(e.group_id, [
		segment.text("欢迎 "),
		segment.at(e.user_id),
		segment.text(" 入群")
	])
	// 拒绝
	// this.setGroupAddRequest(e.flag, false)
})
