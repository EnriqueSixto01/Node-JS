const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true, //this options are deprecated in mongoose v6 
      // useFindAndModify: false,
    });
    console.log("Data Base Online");
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de iniciar la Data Base");
  }
};

module.exports = {
  dbConnection,
};
