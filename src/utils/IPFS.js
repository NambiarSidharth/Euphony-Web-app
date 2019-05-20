// const IPFS = require(‘ipfs-api’);
// const ipfs = new IPFS({ host: ‘ipfs.infura.io’, port: 5001, protocol: ‘https’ });
const IpfsClient = require("ipfs-http-client");
const ipfs = new IpfsClient({host:'gateway.ipfs.io',port:'443',protocol: 'https',API: {
    HTTPHeaders: {
      "Access-Control-Allow-Credentials": [
        true
      ],
      "Access-Control-Allow-Methods": [
        "PUT",
        "GET",
        "POST"
      ],
      "Access-Control-Allow-Origin": [
        "localhost:3000"
      ]
    }}})

export default ipfs