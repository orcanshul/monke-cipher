# Paper: Building MonkeCipher 🐒 🔒
## Created By Foothill Cybersecurity Laboratories

MonkeCipher was born out of a need for a performant and secure method for transporting messages that could be decrypted by humans yet remain virtually impossible to brute force by computers.

That is achieved by utilizing a breakthrough design pattern called overlapping-index.

## Part 1: Design Overview
MonkeCipher is a keyless, one to many, overlapping-index symmetric-key crypto algorithm with a provable security level (assuming the correct design). This part will focus on the overlapping-index design and its implementation.

### Part 1.1: Overview of Index Construction and Overlapping-Index
The first step in constructing MonkeCipher is to create the unique, individual, 1-to-many indices.
This is done through a process known as overlapping-index construction. The official implementation of MonkeCipher for the English alphabet maintains a sensible default index library. Each letter is transformed to a value, however the resulting value may partially overlap with other letters. This approach ensures approach that every letter is unique and not computationally expensive to calculate while being impossible to brute force without human intervention.

### Part 1.2: Why Use a Keyless Cryptosystem?
As previously stated, MonkeCipher utilizes an overlapping-index construction to create 1-to-many indices. MonkeCipher is not a 'key-dependent' encryption algorithm. It is a one-to-many encryption algorithm meaning that there is no 'private key' involved. It is designed to be used with public keys and/or shared symmetric-keys.

However, the overlapping-index construction requires that every index be known to both parties involved in the symmetric-key exchange. The reason this is achieved is because it means that the index generation and index usage is deterministic. You can be confident that the same index will be used every time MonkeCipher is applied to a symmetric key.

There is no such thing as a single shared symmetric-key that all messages are encrypted with. Instead there is a shared symmetric-key which is used to encrypt and/or decrypt a stream of messages. For example, imagine someone is sending encrypted emails from computer A to computer B. The data stored on computer A is encrypted with a shared symmetric-key (K). Computer B is also encrypted with the same symmetric-key (K) but is given a different set of messages to decrypt. These messages (M) are encrypted with a different symmetric-key (M' || K).

To address the challenge of developing a MonkeCipher Specification compliant index, Foothill Cybersecurity Laboratories recommends using the one provided in the official English Alphabet implementation.

## Part 2: Security Assessment and Viability
MonkeCipher is a provably secure encryption algorithm. Due to the nature of its overlapping-index construction, it is not vulnerable to some common attacks. 
To prove the security of the overlapping-index construction, we start with the assumption that encryption and decryption are a randomized and probabilistic process.

Let G(M) be the encryption of M. M can be any set of bits. A and B are two parties which communicate over a secure channel. Let M = {A, B} be the set of all bits which A and B are allowed to communicate. The set of all possible messages M is of size 2^|M|. The encryption function for each party is G, where G takes the bits of M as an input and outputs a keyed encryption of M:

    G(M) = {E(B,B)|B in M} || {E(A,B)|B in M}

The encryption function can be written this way as a matrix multiplication of some number of inputs. This also means that for each cipher generated, there are multiple valid messages it could be decrypted into.

The number of possible decryptions can be roughly calculated using the length of the cipher in the following equation:

```|Possible decryptions|=2^|M|*{number of cipher bits}/{len(magnitude of cipher bits)}```

Taking the English alphabet of 26 letters as an example (|M|=26), it would take 10^36 encryptions to encrypt and 10^36 decryptions to decrypt all the possible cipher text. Of course, this calculation assumes that the input and cipher space are both of the same size. We can see that for a given set of {number of bits} and {len(magnitude of bits)} there will be some specific cipher that encrypts the same message, making the decryption impossible.

When we see that the number of encryptions is larger than the number of decryptions, it is safe to say that a set of messages can be encrypted to generate a cipher space with a total of more encryptions than decryptions.

Given that the encryption of every possible message is statistically equally likely (and thus is equally likely to be picked for a given cipher space), we know that it is statistically impossible to decrypt the cipher space, no matter how much computing power is dedicated to it.

## Part 3: Implementation
MonkeCipher is based around the overlapping-index design. This means that each time a set of letters is transformed to a value, there will be an overlapping portion of the value with the next letter, the next letter with the next letter and so on and so forth. In other words, the final letter may partially overlap with the previous letter and vice versa. The result of the transformation is a unique set of values for each alphabet letter that are statistically unique.

### Part 3.1: English Alphabet Implementation
The English Alphabet implementation maintains a sensible default index library. Each letter is converted into a variation of base value "monke" that is guaranteed to be unique. This value is based on the official MonkeCipher Specification.  The length of the hash is limited to 64 bits and it should never be repeated (to prevent collisions). The following example shows how an example case using the official implementation.

```
"hello" = "mmmmonkemonnkeemmonnkkeeemmonnkkeeemonn"
```

Note that because of the overlapping index constructor, this cipher has over **10 billion distinct encryptions making it impossible** to brute force. The same technique can be used with any alphabet (and can also be extended to include digits, other alphabets, etc.)

### Part 3.2: English Alphabet Usage
**The official implementation is available as a Javascript Module on npm**. The English Alphabet Implementation was developed with ES6 and uses the latest in Javascript features. 
Get started by installing
```bash
  npm install monke-cipher
  ```
  The module can be imported like so
  ```js
  import { toMonkeCipher } from 'monke-cipher'
toMonkeCipher("Secret Message")
```
More information is on the official [Github](https://github.com/orcanshul/monke-cipher)


## Part 4: Comparison to Prior Work
MonkeCipher follows the design philosophy of the overlapping-index design. The overlapping-index is a proven, provably secure, crypto algorithm. There are other ciphers in the public domain, however, there are many reasons to prefer MonkeCipher over the other ciphers. Firstly, MonkeCipher is invulnerable to many common attacks such as

 - Letter Frequency Analysis
 - Least Significant Bit (LSB) Attack
 - Ciphertext Only Attack
 - Symmetric-key recovery attacks

These are all attacks that other has plagued other ciphers such as ROT-13, Ceaser cipher, Twofish, and Blowfish. MonkeCipher can be considered immune to these attacks because it is not a single cipher, but a many-to-one encryption algorithm.

We also believe that MonkeCipher may be one of the most efficient ciphers that is in the public domain. There are no shortcuts (except for the MonkeCipher specification) and no mathematical tricks. It's not possible to do in other ciphers. Allowing a human to decrypt messages while they are being encrypted and using an overlapping-index construct means that the final output is a unique, static, and statistically unique key, instead of the set of keys that was generated when the plaintext was encrypted.


## Part 5: Implementation Vulnerabilities
⚠️ | This part of the paper is a live version. It will be updated if needed
:---: | :---

The section of the document discloses known issues, implementation security flaws, and potential attacks that MonkeCipher currently has, and is susceptible to. 

### Part 5.1: MonkeCipher Cryptographic Specification Adherence Policy
We take the MonkeCipher Specification and follow it religiously.
### Part 5.2: Dependency Supply Chain
MonkeCipher is implemented using vanilla Javascript. No cryptographic libraries were used. We believe that our implementation is solid. However, it is the first implementation of a ciphers that we are aware of that does not have potential issues.

The primary issue found in MonkeCipher was that while the implementation followed the official MonkeCipher specification, the encryption and decryption operations were not symmetric. This allowed the decryption functions to access the key and the encrypted message without authorization.

### Part 5.3: Addressed  Security Flaws
In versions `<1.0.0` of the MonkeCipher module, the implementation did not correctly allocate the memory address reserved for MonkeCipher. This created an attack vector where an attacker could store code in the memory address of MonkeCipher that when referenced would execute (arbitrary code execution). This problem was nicknamed 'Log4Monke' and is fixed by the version 1.0.0 of the implementation of the MonkeCipher module.

## Part 6: MonkeCipher Cryptographic Specification
The base keyword for the algorithm is "monke". Each value is to be a variation of the keyword in such a way that, for each string M in the set of all messages, the value [G(M)] is unique.

Each M in M must be written using the alphabet's characters. Characters which are not a part of M are written using the characters from the alphabet. The characters from the alphabet and the characters not in M are treated as letters in the alphabet. Each letter of M is replaced by a value M', where M' is generated by taking M as an input and outputting the result of G(M). The letters from the alphabet that are used to replace the letters from M are chosen by M.

Every M has its own unique M'. If M' is the same as any other M', then the first M' is removed from the set of all possible messages M. Otherwise, M' is added to the set of all possible messages M.

### Part 6.1: Cipher Definition
Each message M can be encrypted by taking the letters of M, converting them into M' where M' is generated by taking M as an input and outputting the result of G(M).

## Part 7: Conclusion
MonkeCipher was inspired by the overlapping-index design. The overlapping-index design is a proven, provably secure, cryptographic algorithm. There are many implementations of ciphers and one of the most used in the market, ROT-13. MonkeCipher stands out from these other ciphers because it is not a single cipher, but a many-to-one encryption algorithm.

**The overlapping-index implementation can be applied to many other cryptographic problems and has broad applications. **
