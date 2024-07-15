const crypto = require('crypto');
const CryptoJS = require('crypto-js');

// Replace with your desired secret key (length must be 16, 24, or 32 bytes)
const secretKey = crypto.randomBytes(16).toString('base64');
const ivRandomBase64 = crypto.randomBytes(16).toString('base64');

// Replace with your message to encrypt
const message = 'This is a secret message!';

// Convert key and message to WordArray (Crypto-JS's internal format)
const key = CryptoJS.enc.Base64.parse(secretKey);
const iv = CryptoJS.enc.Base64.parse(ivRandomBase64); // Use 16 bytes of the randomized IV

// Encryption options
const options = {
  iv: iv,
  mode: CryptoJS.mode.CBC,
  padding: CryptoJS.pad.Pkcs7,
};

// Encrypt the message
const encrypted = CryptoJS.AES.encrypt(message, key, options).toString();

console.log('Encrypted message:', encrypted);

// Decryption (assuming you keep the key and iv)
const decrypted = CryptoJS.AES.decrypt(encrypted, key, options).toString(
  CryptoJS.enc.Utf8
);

console.log('Decrypted message:', decrypted);

const encryptedNumber = 'TODO';
const testKey = CryptoJS.enc.Base64.parse('KAXftl1UyPDwi9vTh3EVBA==');
const testOptions = {
  iv: CryptoJS.enc.Base64.parse('TVYliFyNr6no5/Es2p1IaQ=='),
  mode: CryptoJS.mode.CBC,
  padding: CryptoJS.pad.Pkcs7,
};
const decryptedNumber = CryptoJS.AES.decrypt(
  encryptedNumber,
  testKey,
  testOptions
).toString(CryptoJS.enc.Utf8);

console.log('Decrypted number:', decryptedNumber);
