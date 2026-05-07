<<<<<<< HEAD
import { logger } from "../utils/logger.ts";
=======
import { logger } from "../utils/logger.js";
>>>>>>> 5d7a7faac8d28e842e46debc1071373dc72f1c53

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
<<<<<<< HEAD
};
=======
};
>>>>>>> 5d7a7faac8d28e842e46debc1071373dc72f1c53
