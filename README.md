
# MonkeCipher 🐒 
A highly secure and robust toolkit for securing data over the internet in a fault-safe way. Web 3.0, NFT, and blockchain ready ✔️

**[Read The Paper Here](https://github.com/orcanshul/monke-cipher/blob/main/PAPER.md)**

## API Reference

#### Cipher Text

```
  toMonkeCipher(message)
```

| Parameter | Type     | 
| :-------- | :------- |
| `message` | `string` |

| Returns                |
| :------------------------- |
| `string` encrypted in MonkeCipher|


#### Decipher Text

```
  fromMonkeCipher(message,key)
```

| Parameter | Type     | 
| :-------- | :------- |
| `message` | `string` |
| `key` | `MonkeDecryptionKey` |

| Returns                |
| :------------------------- |
| `string` decrypted from MonkeCipher|

#### Generate Decryption Key

```
  genMonkeDecryptKey(message)
```

| Parameter | Type     | 
| :-------- | :------- |
| `message` | `string` |

| Returns                |
| :------------------------- |
| `MonkeDecryptionKey`|
  

## Demo

```js
import { toMonkeCipher } from 'monke-cipher'
toMonkeCipher("Secret Message")
```
Or Use Via CDN

```html
 <script src="https://cdn.jsdelivr.net/npm/monke-cipher/monkeCipherWeb.min.js"></script>
```
  

## FAQ

  

#### How do I decrypt?

  A feature with MonkeCipher is that it is **discreetly undecryptable** and requires a lot of brainpower to decrypt. It is impossible to brute force MonkeCipher via a computer but easy for a human. **We do not recommend using key based decryption**, it should only be used for developement.

  

#### Is it secure?

This cipher was developed after years of work at Foothill's Cybersecurity Labs and has been hailed as a performant alterative to AES. 
We have done the math [in our paper](https://github.com/orcanshul/monke-cipher/blob/main/PAPER.md) and have confirmed the security of MonkeCipher.


## Installation

Install monkeCipher with [npm](https://www.npmjs.com/package/monke-cipher)

```bash
  npm install monke-cipher
```
  

## Used By

  

This project is used by the following companies:

  

- National Security Agency

- Federal Bureau of Investigation
- Central Intelligence Agency
- Investigative Committee of Russia
  

## Features

  

- Powerful encryption function included
- Utilites to simulate human decryption

- Impossible to brute-force
## License

  

[MIT](https://choosealicense.com/licenses/mit/)
## Contributing

  

Contributions are always welcome!

 

Please adhere to this project's `code of conduct`.