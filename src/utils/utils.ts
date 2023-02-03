import { MD5 } from "crypto-js";
import { BASE_URL, PRIVATE_KEY, PUBLIC_KEY } from "./constants";

const getHash = (ts: string, privateKey: string, publicKey: string): string => {
  return MD5(ts + privateKey + publicKey).toString();
};

export const fetchData = async () => {
  let heroesUrl = `${BASE_URL}/v1/public/characters`;

  let ts = Date.now().toString();
  let apiKey = PUBLIC_KEY;
  let privateKey = PRIVATE_KEY;
  let hash = getHash(ts, privateKey, apiKey);
  let url = `${heroesUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

  try {
    let response = await fetch(url);
    let data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
};
