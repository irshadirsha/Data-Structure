// function encrypt(text, shift) {
//     let result = '';
  
//     for (let i = 0; i < text.length; i++) {
//       let charCode = text.charCodeAt(i);
//       let encryptedCharCode;
  
//       if (charCode >= 65 && charCode <= 90) {
//         // Uppercase letters (A-Z)
//         encryptedCharCode = ((charCode - 65 + shift) % 26) + 65;
//       } else if (charCode >= 97 && charCode <= 122) {
//         // Lowercase letters (a-z)
//         encryptedCharCode = ((charCode - 97 + shift) % 26) + 97;
//       } else {
//         // Non-alphabetic characters
//         encryptedCharCode = charCode;
//       }
  
//       result += String.fromCharCode(encryptedCharCode);
//     }
  
//     return result;
//   }
  
//   function decrypt(text, shift) {
//     return encrypt(text, 26 - shift); // Decryption is just encryption with reverse shift
//   }
  
//   // Example usage:
//   const plaintext = "irshad";
//   const shift = 4; // Shift by 3 positions
//   const encryptedText = encrypt(plaintext, shift);
//   console.log("Encrypted:", encryptedText);
  
//   const decryptedText = decrypt(encryptedText, shift);
//   console.log("Decrypted:", decryptedText);
  


  function encrypt(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i);
      let encryptedCharCode;
      if (charCode >= 65 && charCode <= 90) {
        encryptedCharCode = ((charCode - 65 + shift) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) {
        encryptedCharCode = ((charCode - 97 + shift) % 26) + 97;
      } else {
        encryptedCharCode = charCode;
      }
      result += String.fromCharCode(encryptedCharCode);
    }
    return result;
  }
  ////////////////
  function decrypt(text, shift) {
        return encrypt(text, 26 - shift); // Decryption is just encryption with reverse shift
      }
  console.log(encrypt("irshad",4))
  
