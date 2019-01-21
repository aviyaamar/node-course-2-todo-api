//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=> {

  if(err){
    return console.log('unable to connect to mongo db server');
  }
  console.log('connected to mongoDB server');
  const db = client.db('TodoApp')

  //deleteMany
//  db.collection('Todos').deleteMany({text: "Eat lunch"}).then((result) =>{
  //  console.log(result);
  //});
  //deleteOne
//  db.collection('Todos').deleteOne({text: "Eat lunch"}).then((result)=>{
  //  console.log(result);
//  });
  //findOndAndDelete
  //db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    ///console.log(result);
//  });
//db.collection('users').deleteMany({name: 'aviya'});

db.collection('users').findOneAndDelete({
   _id: new ObjectID("5c45e0d23de95a1834c32747")
 }).then((results) => {
   console.log(JSON.stringify(results, undefined, 2));
 });

 // db.close();
});
