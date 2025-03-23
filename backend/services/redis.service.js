import Redis from "ioredis";

const redisClient = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
    connectTimeout: 10000,
    retryStrategy: times => Math.min(times * 50, 2000),
})

redisClient.on('connect', (err) => {
    console.log("Redis Connected");
})

export default redisClient;