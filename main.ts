import "dotenv/config";
import { Bot } from "grammy";
import { OpenAI } from "openai/client.js";


const bot = new Bot(process.env.TOKEN!);

bot.command("start", (ctx) => {
    ctx.reply("hello");
});

bot.command("image", async (ctx) => {
    const headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36 Edg/142.0.0.0"
    }
    const url = "https://api.yppp.net/pc.php?return=json"


    try {
        const resp = await fetch(url, { headers })
        const data = await resp.json()
        const url_image = data.acgurl
        await ctx.replyWithPhoto(url_image);

    } catch (error) {
        console.error("url is fake")
    }

})

bot.command("ask", async (ctx) => {
    const text = ctx.msg?.text

    if (!text) {
        return ctx.reply("no message")
    }

    const prompt = text.split(" ").slice(1).join(" ")
    const apiKey = process.env.API_KEY

    const client = new OpenAI({
        apiKey: apiKey,
        baseURL: "https://api.deepseek.com"
    })

    const completion = await client.chat.completions.create({
        model: "deepseek-v4-pro",
        messages: [
            {
                role: 'user',
                content: prompt
            }
        ]
    })

    const resp = completion?.choices[0]?.message.content

    await ctx.reply(resp ?? "No answer", {
        parse_mode: "HTML"
    })

})




bot.on("message:text", (ctx) => {
    const text = ctx.message.text
    ctx.reply(`you say: ${text}`)
})

bot.start()

console.log("Bot start")
