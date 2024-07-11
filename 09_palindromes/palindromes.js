const palindromes = function (str) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
    let newstr = str.toLowerCase().split("").filter((char) => alphanumerical.includes(char)).join("");
    let str2 = newstr.split("").reverse().join("");
    if (newstr === str2) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

