import nodemailer from "nodemailer";


export const sendEmail = async (email:any, subject:any, text:any) => {
    try {
        console.log(process.env.GMAIL_ID);
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            service: process.env.SERVICE,
            port: Number(process.env.EMAIL_PORT),
            secure: Boolean(process.env.SECURE),
            auth: {
                user:process.env.GMAIL_ID,
                pass: process.env.PASS
            }
        })

        await transporter.sendMail({
            from: process.env.GMAIL_ID,
            to: email,
            subject: subject,
            text: text
        });

        console.log("Email sent successfully")
    } catch (error) {
        console.log("email not sent ", error)
    }
}
