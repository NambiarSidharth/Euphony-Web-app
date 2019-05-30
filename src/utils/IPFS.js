// const IPFS = require(‘ipfs-api’);
// const ipfs = new IPFS({ host: ‘ipfs.infura.io’, port: 5001, protocol: ‘https’ });
var ipfsClient = require('ipfs-http-client')

// connect to ipfs daemon API server
var node = ipfsClient('ipfs.infura.io', '5001', { protocol: 'https' }) // leaving out the arguments will default to these values

export default node