const fs = require('fs/promises')

async function toJSON(){
    const path = process.argv[2]
    const jsonPath = process.argv[3]

        await fs.access(`${path}`)
        const content = await fs.readFile(`${path}`, {encoding: 'utf8'})
        const newArray = content.split(/\r?\n/)
        
        let anotherArray = newArray.map(str => str.split(','))
        
        const key = anotherArray[0]
        const values = [
          anotherArray[1],
          anotherArray[2],
          anotherArray[3]
        ]
        
        const result = values.map(row =>
          row.reduce((accumulator, currentValue, i) =>{
            accumulator[key[i]] = currentValue
            return accumulator
          }, {}))
        
        console.log(result) 

        await fs.writeFile(`${jsonPath}`, JSON.stringify(result))
        
}    

toJSON()