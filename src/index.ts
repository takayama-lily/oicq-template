import { assert } from 'console';
import { createClient } from 'oicq';
import { resolve } from 'path/posix';

// 填写账号
const account = NaN;

assert(!isNaN(account), '先填写账号在启动');
export const bot = createClient(account, {
  data_dir: resolve(__dirname, '../data'), // 默认使用项目根目录下的data文件夹存放 bot data，根目录下data文件夹被设定为不被git追踪
});

// 不要使用箭头函数，会丢失 this
// vscode上使用二维码登录需要先将终端拉高，以免二维码显示不全
bot
  .on('system.login.qrcode', function (_event) {
    this.logger.mark('扫码后按Enter完成登录');
    process.stdin.once('data', () => {
      this.login();
    });
  })
  .login();

// 取消注释引入相应功能
import './plugin-hello.js'; //hello world
// import './plugin-image'; //发送图文和表情
// import './plugin-request'; //加群和好友
// import './plugin-online'; //监听上线事件

process.on('未处理的异常：', (reason, promise) => {
  console.log('未处理的异常：', promise, ' 原因:', reason);
});
