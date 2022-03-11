
const fs = require('fs').promises;
const path = require('path');


(async function main() {
    try {
    const parent = process.argv[2];
    const dirnames  = ['scripts', 'styles', 'assets'];
      await Promise.all(
        fs.mkdir(`${parent}`),
        dirnames.map(dirname => fs.mkdir(`${parent}/${dirname}`).catch(console.error))
      );
  
      // All dirs are created here or errors reported.
    } catch (err) {
      console.error(err);
    }

    console.log(files)
  })();