const {ObjectID} = require('mongodb');

const {mongoose} =require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5c4747ff54bd0d4b24b7ccab';

if (!ObjectID.isValid(id)){
  console.log('ID not valid');
}
Todo.find({
  _id: id
}).then((todos) =>{
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) =>{
  console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('id not found');
  }
  console.log('Todo by id', todo);
}).catch((e) =>console.log(e));

User.findById('5c4633936d9a9b0a7ca610f4').then((user) =>{
  if (!user){
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
})
