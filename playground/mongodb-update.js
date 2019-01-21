//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=> {

  if(err){
    return console.log('unable to connect to mongo db server');
  }
  console.log('connected to mongoDB server');
  const db = client.db('TodoApp')

//  db.collection('Todos').findOneAndUpdate({
  //  _id: new ObjectID('5c45fb47e14d218aa3b36ed1')
  //},{
  //  $set:{
    //  completed: true
  //  }
  //}, {
    //returnOriginal: false
//  }). then((result)=>{
  //  console.log(result);
  //});
db.collection('users').findOneAndUpdate({
  _id: new ObjectID('5c45e08c72804f0e70444f5b')
},{
  $set:{
    name: 'Aviya'
  },$inc:{
    age: 1
  }
}, {
    returnOriginal: 'jeb'
}).then((result) => {
  console.log(result);
});
 // db.close();
});
