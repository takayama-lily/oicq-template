# oicq startup template (TypeScript)


## 运行环境:

 - 安装 [Node.js] (https://nodejs.org/) 14以上版本

## 使用方式:

*为了您的固态硬盘着想，建议使用 **pnpm** 替代 **npm**， 但下面使用npm作为包管理工具*

 - 下载模板:
   - 方法1: GitHub Template usages **(推荐)**
   - 方法2: 使用 git clone 到本地
   - 方法3: 下载项目zip后解压
 - 开始开发:
   - 使用Visual Studio Code (VSCode):
     - 安装插件:
       - ESLint (规范代码格式)
     - 使用VSCode打开项目后，按下ctrl+`打开终端:
       1. **终端**运行命令> ```npm run install```
       2. 在 ```src/index.ts``` 里编写你的代码
       3. **终端**运行命令> ```npm run debug``` 进行开发和Debug (可选 ```npm run debug:watch``` 模式下自动观测文件变化重启应用，但最好不要频繁Ctrl+S)
       4. **终端**运行命令> ```npm run start``` 生产环境运行[^1]

## 目录结构说明
 - ```/.vscode/``` 存放vscode针对当前项目的设置
   - ```settings.json``` 设置自动附加带有标志的Node进程来进行debug等
 - ```/src/``` 你的代码主要在这个目录下
   - ```index.ts``` 入口是index.ts
 - ```/test/``` 存放单元测试，若没有需要可自行删除
 - ```/.editorconfig``` 在其他编辑器上可能会遵循这个代码规范
 - ```/.eslintrc.js``` ESLint配置文件，规范代码格式，若不需要规范代码格式删除便是
 - ```/.prettierrc``` Prettier的配置文件，用于格式化代码
 - ```/jest.config.js``` Jest的配置文件，单元测试，不需要删除便是
 - ```/LICENSE``` 不需要可删除
 - ```/nodemon.json``` debug:watch模式下nodemon会读取这个配置文件，若用不到可以删除
 - ```/package.json``` 不可删除，描述了项目依赖
 - ```/pnpm-lock.yaml``` 软件包不同这个文件可能是 package-lock.json 或是 yarn.lock等 该文件用于保证其他人npm install时安装的依赖版本一致
 - ```/README.md``` 完全可以删除这个文件如果你不需要
 - ```/tsconfig.json``` 不可删除，tsc的配置文件，用于生成node可运行的js代码

[^1]: 建议使用 **pm2** 部署你的项目
  [PM2官方文档](https://pm2.keymetrics.io/docs/usage/quick-start/)
  [PM2中文文档](https://wohugb.gitbooks.io/pm2/content/)

----

> 如果你是初学者，建议通过下面的资料提升自己：  
[5分钟上手TypeScript](https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html)  
[JavaScript语言基础](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript) / [现代JavaScript教程](https://zh.javascript.info)  
[Node.js入门教程](http://nodejs.cn/learn)  
[优秀npm三方库集合](https://github.com/sindresorhus/awesome-nodejs)  
