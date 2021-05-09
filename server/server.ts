// Includes
import http from 'http';
import NodeCache from 'node-cache';

// Types
import { GameState } from '../types/gamestate';
// abilities, items, buildings
// Set up
const gameCache: any = new NodeCache();
const port = 3030;
const host = `192.168.1.80`;

const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.method == `POST`) {
      let body = ``;
      res.writeHead(200, { 'Content-Type': `application/json` });

      req.on(`data`, (data) => {
        body += data;
      });
      req.on(`end`, () => {
        gameCache.set(`gameState`, body, 10000);
        res.end();
      });
    } else {
      // Usually just a GET
      const gameState: GameState =
        gameCache.get(`gameState`) ||
        JSON.stringify({
          error: `No data in cache yet`,
          timestamp: Date.now(),
        });
      res.writeHead(200, {
        'Content-Type': `application/json`,
        'Access-Control-Allow-Origin': `*`,
      });
      res.end(gameState);
    }
  },
);

server.listen(port, host);
console.log(`Server listening on ${host}:${port}`);
export {};
