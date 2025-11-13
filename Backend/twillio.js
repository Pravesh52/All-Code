const twilio=require('twilio')



const client=new twilio(accountSid,authToken);

const sendOtp=(phoneNumber,otp)=>{
    return client.messages.create({
        body: `Your OTP is ${otp}`,
        from: '+17622462369',
        to: phoneNumber
    })
}
module.exports = sendOtp;