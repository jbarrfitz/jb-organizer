import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

const FROM_NUMBER = '+19786629696'
const accountSid = <string>process.env.ACCOUNT_SID;
const token = <string>process.env.AUTH_TOKEN;

export default function sendMessage(req: NextApiRequest, res: NextApiResponse) {
  const client = twilio(accountSid, token);
  const { phone, message } = req.body;

  console.log(phone, message);

  client.messages
    .create({
      body: message,
      from: FROM_NUMBER,
      to: phone,
    })
    .then((message) =>
      res.json({
        success: true,
      })
    )
    .catch((error) => {
      console.log(error);
      res.json({
        success: false,
      });
    });
}
