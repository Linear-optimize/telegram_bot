# 🤖Telegram Bot

A lightweight Telegram bot built with **TypeScript** and **grammy**, featuring AI chat powered by DeepSeek and random ACG image delivery.

---

## ✨ Features

* `/start` — Initialize the bot
* `/ask <question>` — Ask DeepSeek AI anything
* `/image` — Get a random ACG image
* Text messages — Echo user input

---

## 🛠 Tech Stack

* **TypeScript** — Strongly typed JavaScript
* **grammy** — Telegram Bot framework
* **OpenAI SDK** — Used to access DeepSeek API
* **pnpm** — Fast package manager

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
pnpm install
```

### 2. Setup environment variables

Create a `.env` file:

```env
TOKEN=your_telegram_bot_token
API_KEY=your_deepseek_api_key
```

* `TOKEN`: Get from BotFather
* `API_KEY`: Get from DeepSeek platform

---

### 3. Run the bot

```bash
# Development mode
pnpm dev

# Format code
pnpm format
```

---

### 🧰 Optional: Using Task

If you use Task:

```bash
# Run the bot
task run

# Format code
task format

# List all tasks
task
```

---

## 📁 Project Structure

```
.
├── main.ts          # Entry point
├── Taskfile.yml     # Task definitions
├── .env             # Environment variables
├── package.json     # Project config
├── tsconfig.json    # TypeScript config
└── README.md        # Documentation
```

---

## 📄 License

MIT License

---

# 🤖 Telegram机器人

一个基于 **TypeScript** 和 **grammy** 构建的 Telegram 机器人，支持 DeepSeek AI 对话与随机 ACG 图片发送。

---

## ✨ 功能

* `/start` — 启动机器人
* `/ask <问题>` — 向 DeepSeek 提问
* `/image` — 获取随机 ACG 图片
* 普通文本 — 自动回显消息

---

## 🛠 技术栈

* **TypeScript**
* **grammy**（Telegram Bot 框架）
* **OpenAI SDK**（用于调用 DeepSeek API）
* **pnpm**（包管理工具）

---

## 🚀 快速开始

### 1. 安装依赖

```bash
pnpm install
```

也可以选择nix
```bash
nix develop
pnpm install
```

### 2. 配置环境变量

创建 `.env` 文件：

```env
TOKEN=你的_Telegram_Bot_Token
API_KEY=你的_DeepSeek_API_Key
```

* `TOKEN`：从 BotFather 获取
* `API_KEY`：从 DeepSeek 平台获取

---

### 3. 运行项目

```bash
# 开发模式
pnpm dev

# 格式化代码
pnpm format
```

---

### 🧰 可选：使用 Task

```bash
# 运行机器人
task run

# 格式化代码
task format

# 查看所有任务
task
```

---



## 📁 项目结构

```
.
├── main.ts          # 主入口
├── Taskfile.yml     # Task 配置
├── .env             # 环境变量
├── package.json     # 项目配置
├── tsconfig.json    # TS 配置
└── README.md        # 文档
```

---

## 📄 许可证

MIT License
