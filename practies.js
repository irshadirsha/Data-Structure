const express= require('express')
const app=express()
const port=4000
app.use(express.json())

app.post('/checkprime',(req,res)=>{
  const numbertocheck=req.body.number
if(isPrime(numbertocheck)){
  res.json({result:`${numbertocheck}is prime number`})
}else{
  res.json({result:`${numbertocheck} is not prime number`})
}
})


function isPrime(number){
  if(number<=1)return false
  for(let i=0;i<Math.sqrt(number);i++){
    if(number%i ==0){
      return false
    }
  }
  return true
}

app.listen(port,()=>{
  console.log("server running")
})