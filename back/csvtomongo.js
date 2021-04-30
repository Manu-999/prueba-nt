const csvtojson = require("csvtojson");
const mongodb = require("mongodb").MongoClient;
require('dotenv').config();

csvtojson()
  .fromFile("politicians.csv")
  .then(csvData => {
    const uri = process.env.DB_CONNECT;
    const client = new mongodb(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    
    client.connect(err => {
      // perform actions on the collection object
      client
              .db("politicians_db")
              .collection("politicians")
              .insertMany(csvData, (err, res) => {
                if (err) throw err;
                console.log(`Inserted: ${res.insertedCount} rows`);
                client.close();
              });
    });
}).catch(err => console.log(err));
