## Soluition for Sendsei React Test

### API calls 

The solution is using the proxy `Heroku app` to fetch the data from the server-side. 
Highly likely, changing the request headers with disabling CORS could influence negatively on the app security and performance during a preflight or an actual request. 

Taking into account the app security, I would like to check the request headers with a backend team to avoid the CORS errors with the request to avoid using the `Heroku app`. 

### Testing 

Jest testing the `Create React App` bootstrapped project needs to overwrite the scripts for Windows 10 Pro machine. It would take some time, so I provided a couple of tests as a direction to the possible unit testing. 

Cheers, 
Alina 
