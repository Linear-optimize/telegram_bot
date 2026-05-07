import "dotenv/config";
import { Bot } from "grammy";

import { registerCommands } from "./src/commands/registerCommands";
import  {logger}  from "./src/utils/logger";


const token = process.env.TOKEN;

if (!token) {
  throw new Error("TOKEN is required");
}

const bot = new Bot(token);

registerCommands(bot);

bot.start();

logger.info("Bot started");
