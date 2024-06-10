const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the filename: ", (filename) => {
  rl.question("Enter the word to remove: ", (word) => {
    // TODO: Implement this function
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        return;
      } else if (data) {
        const modifiedData = data.replace(new RegExp(word, "g"), "");
        fs.writeFile(filename, modifiedData, (err) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log("Success");
        });
      }
    });
    rl.close();
  });
});
