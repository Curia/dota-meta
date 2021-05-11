import { NextApiRequest, NextApiResponse } from 'next';
import NodeCache from 'node-cache';

// Types
import { GameStateInterface } from '../../types/gamestate';

const gameCache: any = new NodeCache();

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === `POST`) {
    res.writeHead(200, { 'Content-Type': `application/json` });
    gameCache.set(`gameState`, JSON.stringify(req.body), 10000);
  } else {
    // Usually just a GET
    const gameState: GameStateInterface =
      gameCache.get(`gameState`) ||
      JSON.stringify({
        error: `No data in cache yet`,
        timestamp: Date.now(),
      });
    res.status(200).json(gameState);
  }
};
