// the file system module
const { ifError } = require('assert');
const fs = require('fs');
//reaing files
fs.readFile('./docs/blog1.txt', (err, data)=>{
  if(err){
    console.log(err)
  }else{
    console.log(data.toString())
  }
})
//wriiting files
fs.writeFile( './docs/blog2.txt', 'hello world',()=>{

  console.log('file written')
})
//direcotries
if (!fs.existsSync('./newDocs')){
  fs.mkdir('./newDocs',(err)=>{
    if (err){
      console.log(err)
    }
    console.log('folder created');
  });
  }else{
    fs.rmdir( './newDocs',(err)=>{
      if (err){
        console.log(err)
      }
      console.log('folder deleted')
    })
  
}
//deleting files
if(fs.existsSync('./docs/deleteme.txt')){
  fs.unlink('./docs/deleteme.txt',(err)=>{
    if (err){
      console.log(err)
    }
    console.log('file deleted')
  })
})