import { bot } from './index';

// 当有好友请求时，自动同意好友申请
bot.on('request.friend', (e) => e.approve());

// 当有群邀请时，自动同意群邀请
bot.on('request.group.invite', (e) => e.approve());

// 同意加群申请，如果要拒绝请使用`e.approve(false)`
bot.on('request.group.add', (e) => e.approve());
