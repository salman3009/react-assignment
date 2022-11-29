const exp = require('express');
const app = exp();

console.log("hello world");

app.listen(3020,()=>{
    console.log("server is running on port 3020")
});

