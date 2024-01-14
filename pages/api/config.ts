import type {NextApiRequest, NextApiResponse} from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({
        domain: process.env.DOMAIN,
        recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY
    });
}