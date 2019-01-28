var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);
//mongoose.connect(config.DB,{ useMongoClient:true });
module.exports = {mongoose};
