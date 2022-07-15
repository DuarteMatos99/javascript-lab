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
];
