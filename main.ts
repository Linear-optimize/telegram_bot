import "dotenv/config";
import { Bot } from "grammy";
<<<<<<< HEAD
import { registerCommands } from "./src/commands/registerCommands";
import  {logger}  from "./src/utils/logger";
=======
import { registerCommands } from "./src/commands/registerCommands.js";
import { logger } from "./src/utils/logger.js";
>>>>>>> 5d7a7faac8d28e842e46debc1071373dc72f1c53

const token = process.env.TOKEN;

if (!token) {
  throw new Error("TOKEN is required");
}

const bot = new Bot(token);

registerCommands(bot);

bot.start();
<<<<<<< HEAD
logger.info("Bot started");
=======
logger.info("Bot started");
>>>>>>> 5d7a7faac8d28e842e46debc1071373dc72f1c53
