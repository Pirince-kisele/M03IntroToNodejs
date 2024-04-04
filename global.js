// Global object

console.log(global);
// set timeout is the function of the global object you can take of the global object in frount of the function it will be the same
setTimeout(()=> {
  console.log('in the time out')
  clearInterval(int)
},3000);


  const int = setInterval(()=> {
    console.log('in the interval')
  },1000);


console.log(__direname); // this gives us the absolut path of the file
console.log(__filename);// this gives us the absolut path of the file an the name of the file