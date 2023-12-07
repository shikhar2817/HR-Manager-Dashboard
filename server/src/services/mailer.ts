import nodeMailer from "nodemailer";
import { ZOHO_MAIL_NOREPLY, ZOHO_MAIL_NOREPLY_PASSWORD } from "../env";

const transporter = nodeMailer.createTransport({
    host: "smtp.zoho.in",
    secure: true,
    port: 465,
    auth: {
        user: ZOHO_MAIL_NOREPLY,
        pass: ZOHO_MAIL_NOREPLY_PASSWORD,
    },
});

export const sendEmail = async (userEmail: string, emailSubject: string, htmlContent: string) => {
    const mailOptions = {
        from: ZOHO_MAIL_NOREPLY,
        to: userEmail,
        subject: emailSubject,
        html: htmlContent,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log(`Email sent to user: ${userEmail} with subject: ${emailSubject}, messageID: ${info.messageId}`);
    } catch (error: unknown) {
        console.error("Error Sending Email: ", error);
        throw Error("Error Sending Email");
    }
};
