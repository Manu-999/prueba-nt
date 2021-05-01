const mongodb = require("mongodb").MongoClient;
const uri = process.env.DB_CONNECT;
const client = new mongodb(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function getPoliticians() {
  await client.connect();
  return await client.db(process.env.DB).collection(process.env.DB_COLLECTION).find().toArray();
};

async function createPolitician(politician) {
  await client.connect();
  return await client.db(process.env.DB).collection(process.env.DB_COLLECTION).insertOne(politician);
};

async function updatePolitician(id, data) {
  await client.connect();
  return await client.db(process.env.DB).collection(process.env.DB_COLLECTION).findOneAndUpdate({_id: id}, data);
};



module.exports = {getPoliticians, createPolitician, updatePolitician};