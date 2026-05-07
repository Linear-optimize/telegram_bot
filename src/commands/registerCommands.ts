import type { Bot } from "grammy";
import { askModel } from "../services/askService.js";
import { fetchImageUrl } from "../services/imageService.js";
import { logger } from "../utils/logger.js";

export const registerCommands = (bot: Bot) => {
  bot.command("start", (ctx) => {
    logger.info("/start command triggered", { from: ctx.from?.id });
    return ctx.reply("hello");
  });

  bot.command("image", async (ctx) => {
    logger.info("/image command triggered", { from: ctx.from?.id });

    try {
      const imageUrl = await fetchImageUrl();
      await ctx.replyWithPhoto(imageUrl);
      logger.info("Image sent successfully", { imageUrl });
    } catch (error) {
      logger.error("Failed to fetch/send image", error);
      await ctx.reply("image fetch failed");
    }
  });

  bot.command("ask", async (ctx) => {
    logger.info("/ask command triggered", { from: ctx.from?.id });

    const text = ctx.msg?.text;
    if (!text) {
      logger.warn("/ask command called without message text");
      return ctx.reply("no message");
    }

    const prompt = text.split(" ").slice(1).join(" ");
    if (!prompt) {
      logger.warn("/ask command missing prompt");
      return ctx.reply("please provide a prompt");
    }

    try {
      const resp = await askModel(prompt);
      await ctx.reply(resp, { parse_mode: "HTML" });
      logger.info("Model response sent", { responseLength: resp.length });
    } catch (error) {
      logger.error("/ask command failed", error);
      await ctx.reply("ask failed");
    }
  });

  bot.on("message:text", (ctx) => {
    const text = ctx.message.text;
    logger.info("Text message received", { from: ctx.from?.id, textLength: text.length });
    return ctx.reply(`you say: ${text}`);
  });
};
