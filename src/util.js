const fs = require("fs");

const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log(error.message);
  }
};

const readFromFile = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    return JSON.parse(content);
  } catch (error) {
    // handle error
    console.log(error.message);
  }
};

module.exports = {
  writeToFile,
  readFromFile,
};