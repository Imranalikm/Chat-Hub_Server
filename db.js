const mongoose = require("mongoose");
const colors = require("colors");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      
    });
    console.log(
      colors.brightMagenta(
        `\nDB connected: ${mongoose.connection.host}\n`
      )
    );
  } catch (error) {
    console.error(colors.brightRed("\nConnection to the database failed\n"), error);
    process.exit(1); // Exit with failure
  }
};

module.exports = dbConnect;
