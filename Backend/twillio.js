const twilio=require('twilio')

const accountSid='ACb7b2a69b8e5cbc749ce9c53694a5424b';
const authToken='dd859b8a44333df2fcaa510fb4cd984f';

const client=new twilio(accountSid,authToken);

const sendOtp=(phoneNumber,otp)=>{
    return client.messages.create({
        body: `Your OTP is ${otp}`,
        from: '+17622462369',
        to: phoneNumber
    })
}
module.exports = sendOtp;