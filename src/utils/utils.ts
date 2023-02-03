import { MD5 } from "crypto-js";
import { BASE_URL, PRIVATE_KEY, PUBLIC_KEY } from "./constants";

const getHash = (ts: string, privateKey: string, publicKey: string): string => {
  return MD5(ts + privateKey + publicKey).toString();
};

export const getAllHeroes = async () => {
  let heroesUrl = `${BASE_URL}/v1/public/characters`;

  let ts = Date.now().toString();
  let apiKey = PUBLIC_KEY;
  let privateKey = PRIVATE_KEY;
  let hash = getHash(ts, privateKey, apiKey);
  let url = `${heroesUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

  try {
    let response = await fetch(url);
    let data = await response.json();

    // console.log(data.data);
    return data.data.results;
  } catch (err) {
    console.error(err);
    return err;
  }
};
