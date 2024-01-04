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

import { useState,useEffect } from 'react'
import './App.css'
import io from "socket.io-client"
const socket = io.connect("http://localhost:4000")
function App() {
   const [message,setMessage]=useState("")
   const [recmessages,setRecMessages]=useState("")
   console.log(message)
  function handleSend(){
    console.log("button clicked")
    socket.emit("send_message",{message:message})
    setMessage('')

  }
  useEffect(()=>{
   socket.on("recived_message",(data)=>{
    console.log("in front end ",data)
    console.log("in front end ",data.message)
    console.log("in front end ",data.message.message)
   setRecMessages(data.message.message )
  // setRecMessages(JSON.stringify(data.message));
   })
  },[socket])
  return (
    <>
      <div>
    <input placeholder='Message...'
    value={message}
    onChange={(e)=>{setMessage(e.target.value)}}
    />
    <button onClick={handleSend}>send message</button>
     <h5>recived messages=={recmessages}</h5>
   
      </div>
    </>
  )
}

export default App
