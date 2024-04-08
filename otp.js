

function generateOtp(){
    let otplength=6
    let otp=""
    for(let i=0;i<otplength;i++){
        otp+=Math.floor(Math.random()*10)
    }
    return otp
}
let otp=generateOtp()
console.log("otp",otp)

// OTP