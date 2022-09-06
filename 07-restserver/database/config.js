const moongose = require("mongoose");

const dbConnection = async () => {
  try {
    await moongose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
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
