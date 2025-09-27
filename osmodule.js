const os = require("os")

// info about current user

const user = os.userInfo()

// method returns the sys uptime 
console.log(`The system uptime is ${os.uptime()} seconds`)


const CurrentOs = {
    name: os.type(),
    release:os.release(),
    Freemem:os.freemem()
}
console.log(CurrentOs)