// Palindrome Checker
/* 
const palindrome = (str) => {
    const del_spaces_str = str.slice().replace(/\s/g, "");
    const del_symbols_str = del_spaces_str.replace(/[^a-zA-Z0-9]/g, "");
    const final_str = del_symbols_str.toLowerCase();
    let reverse_word = String();
    for (let i = final_str.length - 1; i >= 0; i--) {
        reverse_word += final_str[i];
    }

    if (reverse_word == final_str) return true;

    return false;
};

console.log(palindrome("0_0 (: /- :) 0-0")); // true
 */

// Roman Numeral Converter

function convertToRoman(num) {
    const roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };
}

console.log(convertToRoman(36));
