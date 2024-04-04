// Global object

console.log(global);

global.setTimeout(()=> {
  console.log('in the time out')
},3000);


  const int = setInterval(()=> {
    console.log('in the interval')
  },1000);