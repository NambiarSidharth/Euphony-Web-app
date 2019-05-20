// const IPFS = require(‘ipfs-api’);
// const ipfs = new IPFS({ host: ‘ipfs.infura.io’, port: 5001, protocol: ‘https’ });
const IpfsClient = require("ipfs-http-client");
const ipfs = new IpfsClient({host:'ipfs.globalupload.io',port:'443',protocol: 'https'})

export default ipfs