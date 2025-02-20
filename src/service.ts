import authData from './utils/config'

type SendSMSResponse = Promise<Response>

export const sendSMS = (
  sender: string,
  recipient: string,
  message: string
): SendSMSResponse => {
const myHeaders = new Headers();
myHeaders.append("x-api-key", authData.authId);
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  message: message,
  sender: sender,
  recipient: recipient
});

const requestOptions: RequestInit = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow',
  body: raw
};

const  proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const  targetUrl = 'https://api.transmitmessage.com/v1/sms/message'

return fetch(proxyUrl + targetUrl, requestOptions)

}