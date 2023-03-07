// Make a GET request to the ipify API
fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    // Get the IP address from the JSON response
    const ipAddress = data.ip;
    console.log(`The user's IP address is: ${ipAddress}`);
  })
  .catch(error => {
    console.error('Error retrieving IP address:', error);
  });
