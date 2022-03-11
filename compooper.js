const os = require('os')

const operativsystem = os.platform()
const version = os.release()
const memory = os.totalmem()
const cpus = os.cpus()

console.log(`Platform: ${operativsystem} ${version}`)
console.log(`Memory: ${memory}`)
for (cpu in cpus){
    console.log(cpus[cpu])
}
