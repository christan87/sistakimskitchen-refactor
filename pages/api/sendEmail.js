import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    if(req.method === 'POST') {
        const {        
            firstName,
            lastName,
            email,
            message,
            dropdown,
            date,
            time,
            phoneNumber
        } = req.body;

        const content = {
            to: process.env.DEFAULE_FORM_EMAIL,
            from: email,
            subject: `New ${dropdown} Message from - ${firstName} ${lastName}`,
            text: message,
            html: `<p>${message}</p><br><p>Date: ${date}</p><p>Time: ${time}</p><p>Phone Number: ${phoneNumber}</p>`
        };

        try {
            await sgMail.send(content);
            res.status(200).send('Message sent successfully.');
        } catch(error) {
            console.log('ERROR', error);
            res.status(400).send('Message not sent.');
        }
    } else {
        res.status(405).send('Wrong Method: SendGrid');
    }
};