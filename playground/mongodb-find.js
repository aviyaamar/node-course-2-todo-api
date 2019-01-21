//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=> {

  if(err){
    return console.log('unable to connect to mongo db server');
  }
  console.log('connected to mongoDB server');
  const db = client.db('TodoApp')

  //db.collection('Todos').find({
    //_id:new ObjectID("5c45ee42e14d218aa3b3699e")
  //}).toArray().then((docs)=>{
    //console.log('Todos');
    //console.log(JSON.stringify(docs, undefined, 2));
  //}, (err)=>{
    //console.log('unable to fetch todos' ,err);
  //})

//  db.collection('Todos').find().count().then((count)=>{
  //  console.log(`Todos count:${count}`);
  //  }, (err)=>{
  //  console.log('unable to fetch todos' ,err);
  //});

  db.collection('users').find({name:'aviya'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err)=>{
    console.log('Unable to fetch name' ,err);
  })
  //client.close();

});
