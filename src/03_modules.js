// print out the command line arguments
console.log(process.argv)

// print out the OS platform you're using
console.log(process.platform)

// Print out version of Node 
console.log(process.version)

// Print the current process ID
console.log(`This process is pid ${process.pid}`);

// Print the current working directory
console.log(`Current directory: ${process.cwd()}`);

// Print out your machine's login name
const os = require('os')

console.log(`Current uid: ${os.userInfo().username}`);
