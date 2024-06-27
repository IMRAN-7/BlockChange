import app from "./index.js"
app.listen(process.env.PORT,()=>{
    console.log(`server listening at port ${process.env.PORT}`);
})