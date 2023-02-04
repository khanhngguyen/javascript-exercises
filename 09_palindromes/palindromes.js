const palindromes = function (str) {
    const specialChar = /[^A-Za-z0-9]/g;
    //to remove special characters from given string, then make it lower case:
    let strNoSpecialChar = str.toLowerCase().replace(specialChar, '');
    //palindrome: if string === reversed string => palindrome;
    //to reverse string, convert to array, then use reverse(), then convert back to string
    let reversedStr = strNoSpecialChar.split('').reverse().join('');
    //now compare
    return (strNoSpecialChar === reversedStr) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;

