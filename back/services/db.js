const mongodb = require("mongodb").MongoClient;

//Connect DB

const uri = process.env.DB_CONNECT;
const client = new mongodb(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect()