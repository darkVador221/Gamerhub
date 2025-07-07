const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/gamerhub', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;