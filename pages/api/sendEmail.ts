import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer, {Transporter} from 'nodemailer';
import axios from 'axios';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, message, recaptchaValue } = req.body;
    const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;

    const transporter: Transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        },
    });


    try {
        const recaptchaResponse = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${recaptchaValue}`);
        if (!recaptchaResponse.data.success) {
            return res.status(400).json({ success: false, error: 'Invalid reCAPTCHA. Please try again.' });
        }

        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_TO,
            subject: 'Neue Nachricht von Ihrer Webseite',
            text: `Sie haben eine neue Nachricht von ${email}: ${message}`,
        });
        res.status(200).json({ success: true });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ success: false, error: error.message });
        } else {
            res.status(500).json({ success: false, error: "Ein unbekannter Fehler ist aufgetreten" });
        }    }
};

export default handler;


