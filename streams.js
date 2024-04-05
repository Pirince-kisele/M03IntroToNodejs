//this is how to readstream chunk of data et how to write to a stream
const fs = require('fs');
const readstream = fs.createReadStream('./docs/blog3.txt', {
  highWaterMark: 200,// how many cahrcters to read at a time
  encoding: 'utf-8'// how to encode the data
});
const writemstream = fs.createWriteStream('./docs/blog4.txt',{
  highWaterMark: 200,
  encoding: 'utf-8'
})
readstream.on( 'data', (chunk)=>{
  console.log('-------NEW ChuNk-------')
  console.log(chunk.toString())
  writemstream.write('\nNew chunk\n');
  writemstream.write(chunk);
});

// piping
readstream.pipe(writemstream);