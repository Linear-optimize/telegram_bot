import { OpenAI } from "openai/client.js";

import  {logger}  from "../utils/logger";


export const askModel = async (prompt: string): Promise<string> => {
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    logger.warn("Missing API_KEY for /ask command");
    return "API_KEY is not configured";
  }

  const client = new OpenAI({
    apiKey,
    baseURL: "https://api.deepseek.com",
  });

  logger.info("Sending prompt to model", { promptLength: prompt.length });

  const completion = await client.chat.completions.create({
    model: "deepseek-v4-pro",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return completion?.choices[0]?.message.content ?? "No answer";

};

