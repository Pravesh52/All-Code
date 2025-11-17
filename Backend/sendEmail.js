const nodemailer=require('nodemailer');

const sendEmail=async(to, subject,text)=>{
    const transporter=nodemailer.createTransport({
        service:'Gmail',
        auth:{
            user:'pravesht252@gmail.com',
            pass:'mvcl ndjn dbtt ukip',
        },
    });
    const mailOptions={
        from:'pravesht252@gmail.com',
        to,
        subject,
        text,
    };
    await transporter.sendMail(mailOptions);

};
module.exports={sendEmail};