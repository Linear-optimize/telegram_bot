
import { logger } from "../utils/logger";


const headers = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36 Edg/142.0.0.0",
};

const imageApiUrl = "https://api.yppp.net/pc.php?return=json";

export const fetchImageUrl = async (): Promise<string> => {
  logger.info("Fetching image URL from third-party API", { imageApiUrl });

  const resp = await fetch(imageApiUrl, { headers });
  const data = (await resp.json()) as { acgurl?: string };

  if (!data.acgurl) {
    throw new Error("Image API returned invalid payload");
  }

  return data.acgurl;

};
