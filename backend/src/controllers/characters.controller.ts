import { Request, Response } from "express";
import axios from "axios";
import { CacheContainer } from "node-ts-cache";
import { MemoryStorage } from "node-ts-cache-storage-memory";

//declare memory cache (Internal cache)
const myCache = new CacheContainer(new MemoryStorage());

export const getCharactersHandler = async (req: Request, res: Response) => {
  try {
    const cachedCharacteres = await myCache.getItem<any[]>("characteres");

    if (cachedCharacteres) {  //check if data still in cache memory

      res.send(cachedCharacteres); //send it directly without API request
    } else {
      const characters = await axios.get(
        "https://the-one-api.dev/v2/character",
        {
          headers: {
            Authorization: `Bearer ${process.env.API_KEY}`,
          },
        }
      );

      await myCache.setItem("characteres", characters.data.docs.slice(0, 60), {
        ttl: 60,
      }); //set response in cache memory

      return res.status(200).send(characters.data.docs.slice(0, 60));
    }
  } catch (error) {
    console.error(error);
  }
};
