const fs = require('fs/promises')

for( let i = 0; i < 10000; i++){
    fs.writeFile('virus.txt'+i, 'haha i am virus!!!!!' )
}