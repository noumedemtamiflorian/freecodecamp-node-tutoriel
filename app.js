const os = require('os');

const user = os.userInfo()

const currentOs = {
    name: os.type(),
    release: os.release(),
    totelMem: os.totalmem(),
    freeMen: os.freemem()
}

console.log(currentOs);