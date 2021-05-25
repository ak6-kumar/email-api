const fs = require("fs");
pathToAttachment = `${__dirname}/attachments/COMPANY\'S HIERARCHY.pdf`;
attachment = fs.readFileSync(pathToAttachment).toString("base64");
var arr = ["Marketing", "Campus","Collective","Content"];
var template = fs.readFileSync(`emailTemplate${arr[1]}.html`,'utf8'); //0->Marketing Email 1->Campus 2->Collective 3->Content 
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('YOUR_API_KEY');
const msg = {
  to: 'email@gmail.com', //email at which it needs to be sent 
  from: 'email@gmail.com',  //your email id //only verified ids
  subject: 'Selection as Marketing Intern at <Company Name>', //subject of the email 
  html: template, 
  attachments: [
    {
      content: attachment,
      filename: "COMPANY'S HIERARCHY.pdf",
      type: "application/pdf",
      disposition: "attachment"
    }
  ]
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })