//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=> {

  if(err){
    return console.log('unable to connect to mongo db server');
  }
  console.log('connected to mongoDB server');
  const db = client.db('TodoApp')

//  db.collection('Todos').insertOne({
  //  text: 'Something to do',
    //completed: false

  //}, (err, result) =>{
    //if(err){
      //console.log('unable to insert todo' , err);
  //  }
//});
//    db.collection('users').insertOne({
  //    name: 'aviya',
    //  age: 25,
      //location: 'netivot'
  //  }, (err, result) =>{
    //  if(err){
      //  console.log('unable to insert users' , err);
      //}
    //console.log(result.ops[0]._id.getTimestamp());
//});
  client.close();

});
