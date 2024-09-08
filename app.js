const express=require('express');
const path=require('path');
const app= express();
const PORT=7881;
app.use(express.static(path.join(__dirname, 'public')));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','input.html'))
});
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
    
});