export const algorithms_and_datastructures_projects = [
    {
        name: "Palindrome Checker",
        description: `<p>Return 'true' if the given string is a palindrome. Otherwise, return 'false'.</p>
        <p>A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.</p>
        <p>Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.</p>
        <p>We'll pass strings with varying formats, such as 'racecar', 'RaceCar', and 'race CAR' among others.</p>
        <p>We'll also pass strings with special symbols, such as '2A3*3a2', '2A3 3a2', and '2_A3*3#A2'.</p>`,
        code:
            "\nconst palindrome = (str) => {\n" +
            '    const del_spaces_str = str.slice().replace(/\\s/g, "");\n' +
            '    const del_symbols_str = del_spaces_str.replace(/[^a-zA-Z0-9]/g, "");\n' +
            "    const final_str = del_symbols_str.toLowerCase();\n" +
            "    let reverse_word = String();\n" +
            "    for (let i = final_str.length - 1; i >= 0; i--) {\n" +
            "        reverse_word += final_str[i];\n" +
            "    }\n" +
            "\n" +
            "    if (reverse_word == final_str) return true;\n" +
            "\n" +
            "    return false;\n" +
            "};\n" +
            "\n" +
            'console.log(palindrome("0_0 (: /- :) 0-0")); // true\n',
    },
    {
        name: "Roman Numeral Converter",
        description: `<p>Convert the given number into a roman numeral.</p>
        <p>All roman numerals answers should be provided in upper-case.</p>`,
        code:
            "\nconst convertToRoman = (num) => {\n" +
            "    const roman_numerals = {\n" +
            "        M: 1000,\n" +
            "        CM: 900,\n" +
            "        D: 500,\n" +
            "        CD: 400,\n" +
            "        C: 100,\n" +
            "        XC: 90,\n" +
            "        L: 50,\n" +
            "        XL: 40,\n" +
            "        X: 10,\n" +
            "        IX: 9,\n" +
            "        V: 5,\n" +
            "        IV: 4,\n" +
            "        I: 1,\n" +
            "    };\n" +
            "\n" +
            "    let remaining_num = num;\n" +
            "    let roman_sentence = String();\n" +
            "    for (const [roman_numeral, arabic_numeral] of Object.entries(\n" +
            "        roman_numerals\n" +
            "    )) {\n" +
            "        let next_roman_numeral = false;\n" +
            "        while (!next_roman_numeral) {\n" +
            "            if (arabic_numeral <= remaining_num) {\n" +
            "                remaining_num -= arabic_numeral;\n" +
            "                roman_sentence += roman_numeral;\n" +
            "            } else {\n" +
            "                next_roman_numeral = true;\n" +
            "            }\n" +
            "        }\n" +
            "    }\n" +
            "\n" +
            "    return roman_sentence;\n" +
            "};\n" +
            "\n" +
            "console.log(convertToRoman(45)); // XLV\n",
    },
];
