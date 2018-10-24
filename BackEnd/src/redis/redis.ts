import * as cache from 'express-redis-cache';
import {redisCredentials} from './credentials';

declare var __dirname: any;


let redis = cache({
    //client: redisClustr,
    host: redisCredentials.host,
    prefix: 'noderedis',
    expire: 60
});
redis.on('connected', function () {
    console.info('Redis connected');
});
redis.on('disconnected', function () {
    console.info('Redis disconnected');
});
redis.on('message', function (message) {
    console.info(message);
});
redis.on('error', function (error) {
    console.info('Redis error', error);
});



export function redisExpressCache() {
    return redis;
}