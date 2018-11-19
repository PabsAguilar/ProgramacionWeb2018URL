// lib/server.ts
import app from "./app";

const PORT = process.env.PORT || 3000;
const redisUrl = process.env.REDIS_URL || '127.0.0.1';

app.listen(PORT, () => {
    console.log('Express server listening on port | redis: ' + PORT + ' ' +redisUrl );
})