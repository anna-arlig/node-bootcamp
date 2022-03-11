const fs = require('fs/promises')

async function random(){
    const path = process.argv[2]
    try{
    await fs.access(`${path}`)
    const content = await fs.readFile(`${path}`, {encoding: 'utf8'})
    const wordsArray = content.split(/\r?\n/)
    let randomNum = Math.floor(Math.random()*wordsArray.length)
    console.log(wordsArray[randomNum])
    }
    catch{
        console.log('error')
    }
    
}

random()