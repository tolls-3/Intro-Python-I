// Open up the "foo.txt" file (which already exists) for reading
// # Print all the contents of the file, then close the file
// # Note: pay close attention to your current directory when trying to open "foo.txt"
const fs = require('fs')
const readStream = fs.createReadStream('./foo.txt', 'utf8');
const writeStream = fs.createWriteStream('./bar-js.txt')
readStream.on('data', (chunk) => {
    console.log(chunk)
})
// # Open up a file called "bar.txt" (which doesn't exist yet) for
// # writing. Write three lines of arbitrary content to that file,
// # then close the file. Open up "bar.txt" and inspect it to make
// # sure that it contains what you expect it to contain

writeStream.write('Hello from bar file!\n Another line?\n And yet another line!')