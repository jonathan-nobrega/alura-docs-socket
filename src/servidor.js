import express from 'express';
import http from "http";
import path from 'path';
import { Server } from "socket.io";
import url from 'url';

const app = express()
const port = process.env.port || 3000;

const presentPath = url.fileURLToPath(import.meta.url)
const publicDirectory = path.join(presentPath, "../..", "public");

console.log(presentPath, '\n', publicDirectory)

app.use(express.static(publicDirectory))

const servidorHttp = http.createServer(app)

servidorHttp.listen(port, () => console.log(`\nServer listening on http://localhost:${port}\n`))

const io = new Server(servidorHttp)

export default io;