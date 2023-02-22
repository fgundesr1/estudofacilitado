const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://fgundesr:H@m@dei9797@cluster.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


collection.find({}).toArray(function(err, titulo1) {
    // data contains the documents returned from the find method
    console.log(titulo1);
  });
  