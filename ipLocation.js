let ipAddress = '';
fetch('https://api.ipify.org/?format=json')
  .then(response => response.json())
  .then(data => {
    ipAddress = data.ip;
    console.log(ipAddress);
    fetch(`https://ipapi.co/${ipAddress}/json/`)
  .then(response => response.json())
  .then(data => {
    const location = `${data.city}, ${data.region}, ${data.country_name}`;
    console.log(location);
    const accountSid = 'YOUR_ACCOUNT_SID';
const authToken = 'YOUR_AUTH_TOKEN';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: `User location: ${location}`,
     from: 'YOUR_TWILIO_PHONE_NUMBER',
     to: 'RECIPIENT_PHONE_NUMBER'
   })
  .then(message => console.log(message.sid))
  .catch(error => console.error(error));

  })
  .catch(error => console.error(error));
  })
  .catch(error => console.error(error));
