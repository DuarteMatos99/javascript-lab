export const scripting_algorithms = [
    {
        name: "Sum All Numbers in a Range",
        description: `<p>We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.</p>

        <p>For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.</p>`,
        code:
            "\nconst sumAll = (arr) => {\n" +
            "    const copy_arr = [...arr];\n" +
            "    const high_num = Math.max(...copy_arr);\n" +
            "    const min_num = Math.min(...copy_arr);\n" +
            "    let final_sum = 0;\n" +
            "\n" +
            "    for (let i = min_num; i <= high_num; i++) {\n" +
            "        final_sum += i;\n" +
            "    }\n" +
            "\n" +
            "    return final_sum;\n" +
            "};\n" +
            "\n" +
            "console.log(sumAll([1, 4])); // 10",
    },
    {
        name: "Diff Two Arrays",
        description: `<p>Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.</p>`,
        code:
            "\nconst diffArray = (arr1, arr2) => {\n" +
            "    const first_array = arr1.slice();\n" +
            "    const second_array = arr2.slice();\n" +
            "\n" +
            "    const first_filtered = first_array.filter(\n" +
            "        (item, index) => !second_array.includes(item)\n" +
            "    );\n" +
            "    const second_filtered = second_array.filter(\n" +
            "        (item, index) => !first_array.includes(item)\n" +
            "    );\n" +
            "\n" +
            "    const final_arr = [...first_filtered, ...second_filtered];\n" +
            "    return final_arr;\n" +
            "};\n" +
            "\n" +
            "console.log(diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5])); // [6,4]",
    },
    {
        name: "Seek and Destroy",
        description: `<p>You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.</p>
        <p>Note: You have to use the arguments object.</p>`,
        code:
            "\nconst destroyer = (...args) => {\n" +
            "    const arr = args[0].slice();\n" +
            "\n" +
            "    for (let i = 1; i < args.length; i++) {\n" +
            "        const indexes_to_remove = arr\n" +
            "            .map((item, index) => {\n" +
            "                if (item == args[i]) return index;\n" +
            "            })\n" +
            "            .filter((item, index) => item != undefined);\n" +
            "\n" +
            "        for (let index in indexes_to_remove) {\n" +
            "            arr[indexes_to_remove[index]] = undefined;\n" +
            "        }\n" +
            "    }\n" +
            "\n" +
            "    return arr.filter((item, index) => item != undefined);\n" +
            "};\n" +
            "\n" +
            "console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [1,1]",
    },
    {
        name: "Wherefore art thou",
        description: `<p>Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.</p>
        <p>For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.</p>`,
        code:
            "\nconst whatIsInAName = (collection, source) => {\n" +
            "    const chosen_indexes = collection.map(() => []);\n" +
            "    const source_length = Object.keys(source).length;\n" +
            "\n" +
            "    for (const [source_key, source_value] of Object.entries(source)) {\n" +
            "        for (let i = 0; i < collection.length; i++) {\n" +
            "            for (const [collection_key, collection_value] of Object.entries(\n" +
            "                collection[i]\n" +
            "            )) {\n" +
            "                if (\n" +
            "                    source_key === collection_key &&\n" +
            "                    source_value === collection_value\n" +
            "                )\n" +
            "                    chosen_indexes[i].push(i);\n" +
            "            }\n" +
            "        }\n" +
            "    }\n" +
            "    const arr = chosen_indexes\n" +
            "        .filter((group) => group.length == source_length)\n" +
            "        .map((item) => collection[item[0]]);\n" +
            "    return arr;\n" +
            "};\n" +
            "\n" +
            "console.log(\n" +
            "    whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {\n" +
            "        apple: 1,\n" +
            "    })\n" +
            "); // [{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }]",
    },
    {
        name: "Spinal Tap Case",
        description: `<p>Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.</p>`,
        code:
            "\nconst spinalCase = (str) => {\n" +
            '    const clean_str = str.replace(/[-!$%^&*()_+|~=`{}\\[\\]:";\'<>?,.\\/\\s]/g, " ");\n' +
            "    const splited_by_uppercase = clean_str.split(/(?=[A-Z\\s])/);\n" +
            "    const splited_no_spaces = splited_by_uppercase\n" +
            '        .filter((item) => item != " ")\n' +
            "        .map((item) => item.trim());\n" +
            '    const joined_str = splited_no_spaces.join("-");\n' +
            "    const lower_str = joined_str.toLowerCase();\n" +
            "    return lower_str;\n" +
            "};\n" +
            "\n" +
            'console.log(spinalCase("thisIsSpinalTap")); // this-is-spinal-tap',
    },
    {
        name: "Pig Latin",
        description: `<p>Pig Latin is a way of altering English Words. The rules are as follows:</p>
        <p>- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add 'ay' to it.</p>
        <p>- If a word begins with a vowel, just add 'way' at the end.</p>
        <p>Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.</p>`,
        code:
            "\nconst translatePigLatin = (arg) => {\n" +
            '    const vowels = ["a", "e", "i", "o", "u"];\n' +
            "    let str = arg.slice();\n" +
            "    let word = arg.slice();\n" +
            "    let counter = 0;\n" +
            "\n" +
            "    for (let i = 0; i < str.length; i++) {\n" +
            "        const first_letter = str[i];\n" +
            "        const is_vowel = vowels.includes(first_letter);\n" +
            "\n" +
            "        if (is_vowel) {\n" +
            '            i == 0 ? (word += "way") : (word += "ay");\n' +
            "            break;\n" +
            '        } else if (str.length - 1 == counter) str += "ay";\n' +
            "\n" +
            "        word = word.slice(1, word.length) + first_letter;\n" +
            "        counter += 1;\n" +
            "    }\n" +
            "\n" +
            "    return word;\n" +
            "};\n" +
            "\n" +
            'console.log(translatePigLatin("rhythm")); // rhythmay',
    },
    {
        name: "Search and Replace",
        description: `<p>Perform a search and replace on the sentence using the arguments provided and return the new sentence.</p>
        <p>First argument is the sentence to perform the search and replace on.</p>
        <p>Second argument is the word that you will be replacing (before).</p>
        <p>Third argument is what you will be replacing the second argument with (after).</p>
        <p>Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word 'Book' with the word 'dog', it should be replaced as 'Dog'.</p>`,
        code:
            "\nconst myReplace = (str, before, after) => {\n" +
            "    let sentence = str.slice();\n" +
            "    let replace_word = after.slice();\n" +
            '    const splited_sentence = sentence.split(" ");\n' +
            "    const sentence_replaced = splited_sentence.map((word) => {\n" +
            "        if (word == before) {\n" +
            "            const first_word_letter = word[0];\n" +
            "            let first_replace_word_letter = replace_word[0].toLowerCase();\n" +
            "\n" +
            "            if (first_word_letter == first_word_letter.toUpperCase()) {\n" +
            "                first_replace_word_letter =\n" +
            "                    first_replace_word_letter.toUpperCase();\n" +
            "            }\n" +
            "\n" +
            "            replace_word =\n" +
            "                first_replace_word_letter +\n" +
            "                replace_word.slice(1, replace_word.length);\n" +
            "\n" +
            "            return replace_word;\n" +
            "        }\n" +
            "\n" +
            "        return word;\n" +
            "    });\n" +
            "\n" +
            '    return sentence_replaced.join(" ");\n' +
            "};\n" +
            "\n" +
            "console.log(\n" +
            '    myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped")\n' +
            "); // A quick brown fox Leaped over the lazy dog",
    },
    {
        name: "DNA Pairing",
        description: `<p>Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.</p>
        <p>The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. </p>
        <p>For each character in the provided string, find the base pair character. Return the results as a 2d array.</p>
        <p>For example, for the input 'GCG', return '[["G", "C"], ["C","G"], ["G", "C"]]'</p>
        <p>The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.</p>`,
        code:
            "\nconst pairElement = (str) => {\n" +
            '    const pairs = { A: "T", C: "G", G: "C", T: "A" };\n' +
            '    const single_genes = str.split("");\n' +
            "    console.log(single_genes);\n" +
            "    const dna_pairs = single_genes.map((item) => [item, pairs[item]]);\n" +
            "\n" +
            "    return dna_pairs;\n" +
            "};\n" +
            "\n" +
            "console.log(pairElement(\"CGC\")); // [['C', 'G'], ['G', 'C'], ['C', 'G']]",
    },
    {
        name: "Missing letters",
        description: `<p>Find the missing letter in the passed letter range and return it.</p>
        <p>If all letters are present in the range, return 'undefined'.</p>`,
        code:
            "\nconst fearNotLetter = (str) => {\n" +
            "    const alpha = Array.from(Array(26)).map((e, i) => i + 65);\n" +
            "    const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());\n" +
            "\n" +
            "    const input_letters = str.slice();\n" +
            '    const input_array = input_letters.split("");\n' +
            "    const input_first_index = alphabet.indexOf(input_letters[0]);\n" +
            "\n" +
            "    for (let i = 0; i < input_letters.length; i++) {\n" +
            "        if (input_array[i] != alphabet[input_first_index + i]) {\n" +
            "            return alphabet[input_first_index + i];\n" +
            "        }\n" +
            "    }\n" +
            "\n" +
            "    return undefined;\n" +
            "};\n" +
            "\n" +
            'console.log(fearNotLetter("stvwx")); // u',
    },
    {
        name: "Sorted Union",
        description: `<p>Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.</p>
        <p>In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.</p>
        <p>The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.</p>`,
        code:
            "\nconst uniteUnique = (...arr) => {\n" +
            "    const args = [...arr];\n" +
            "    const unique_arr = [];\n" +
            "\n" +
            "    args.forEach((arg) => {\n" +
            "        arg.forEach((item) => {\n" +
            "            !unique_arr.includes(item) && unique_arr.push(item);\n" +
            "        });\n" +
            "    });\n" +
            "\n" +
            "    return unique_arr;\n" +
            "};\n" +
            "\n" +
            "console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4])); // [1, 2, 3, 5, 4]\n",
    },
    {
        name: "Convert HTML Entities",
        description: `<p>Convert the characters '&', '<', '>', " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.</p>`,
        code:
            "\nconst convertHTML = (str) => {\n" +
            "    const html_entities = {\n" +
            '        "&": "&amp;",\n' +
            '        "<": "&lt;",\n' +
            '        ">": "&gt;",\n' +
            '        "\'": "&apos;",\n' +
            '        \'"\': "&quot;",\n' +
            "    };\n" +
            '    const str_splited = str.slice().split("");\n' +
            "    const entities = str_splited.map((item, index) => {\n" +
            "        const char = html_entities[item];\n" +
            "        if (char != undefined) return char;\n" +
            "        return item;\n" +
            "    });\n" +
            "\n" +
            '    const final_str = entities.join("");\n' +
            "    return final_str;\n" +
            "};\n" +
            "\n" +
            "console.log(convertHTML('Stuff in \"quotation marks\"')); // Stuff in &quot;quotation marks&quot;",
    },
    {
        name: "Sum All Odd Fibonacci Numbers",
        description: `<p>Given a positive integer 'num', return the sum of all odd Fibonacci numbers that are less than or equal to 'num'.</p>
        <p>The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.</p>
        <p>For example, 'sumFibs(10)' should return '10' because all odd Fibonacci numbers less than or equal to '10' are 1, 1, 3, and 5.</p>`,
        code:
            "\nconst sumFibs = (num) => {\n" +
            "    let current = 1;\n" +
            "    let next = 0;\n" +
            "    let previous = 0;\n" +
            "    let sum_odd = 0;\n" +
            "\n" +
            "    while (sum_odd < num) {\n" +
            "        previous = current;\n" +
            "        current = next;\n" +
            "        next = previous + current;\n" +
            "\n" +
            "        if (current > num) return sum_odd;\n" +
            "        if (current % 2 == 1) sum_odd += current;\n" +
            "    }\n" +
            "\n" +
            "    return sum_odd;\n" +
            "};\n" +
            "\n" +
            "console.log(sumFibs(1000)); // 1785\n",
    },
    {
        name: "Sum All Primes",
        description: `<p>A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.</p>
        <p>Rewrite 'sumPrimes' so it returns the sum of all prime numbers that are less than or equal to num.</p>`,
        code:
            "\nconst sumPrimes = (num) => {\n" +
            "    let sum_primes = 0;\n" +
            "    for (let i = 1; i <= num; i++) {\n" +
            "        let counter = 0;\n" +
            "        for (let j = 1; j <= i; j++) {\n" +
            "            if (i % j == 0) counter += 1;\n" +
            "            if (counter == 3) break;\n" +
            "        }\n" +
            "        if (counter == 2) sum_primes += i;\n" +
            "    }\n" +
            "    return sum_primes;\n" +
            "};\n" +
            "\n" +
            "console.log(sumPrimes(10)); // 17\n",
    },
    {
        name: "Smallest Common Multiple",
        description: `<p>Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.</p>
        <p>The range will be an array of two numbers that will not necessarily be in numerical order.</p>
        <p>For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.</p>`,
        code:
            "\nconst smallestCommons = (arr) => {\n" +
            "    const prime_numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23];\n" +
            "    const sorted = arr.sort((a, b) => a - b);\n" +
            "    const numbers = [];\n" +
            "    for (let i = sorted[0]; i <= sorted[1]; i++) numbers.push(i);\n" +
            "\n" +
            "    const common_multiple_multipliers = [];\n" +
            "    let common_multiple_found = false;\n" +
            "    let prime_index = 0;\n" +
            "\n" +
            "    while (!common_multiple_found) {\n" +
            "        let change_prime = true;\n" +
            "        let add_multiplier = false;\n" +
            "\n" +
            "        for (let j = 0; j < numbers.length; j++) {\n" +
            "            if (numbers[j] != 1) {\n" +
            "                const prime_division = numbers[j] / prime_numbers[prime_index];\n" +
            "                const is_integer = Number.isInteger(prime_division);\n" +
            "                if (is_integer) {\n" +
            "                    add_multiplier = true;\n" +
            "                    numbers[j] = prime_division;\n" +
            "                    const next_prime_division =\n" +
            "                        prime_division / prime_numbers[prime_index];\n" +
            "                    const next_is_integer =\n" +
            "                        Number.isInteger(next_prime_division);\n" +
            "                    if (next_is_integer) change_prime = false;\n" +
            "                }\n" +
            "            }\n" +
            "        }\n" +
            "\n" +
            "        common_multiple_found = numbers.every((num) => num == 1);\n" +
            "\n" +
            "        if (add_multiplier) {\n" +
            "            common_multiple_multipliers.push(prime_numbers[prime_index]);\n" +
            "        }\n" +
            "\n" +
            "        if (change_prime) prime_index += 1;\n" +
            "    }\n" +
            "\n" +
            "    let common_multiple = 1;\n" +
            "    common_multiple_multipliers.forEach((num) => (common_multiple *= num));\n" +
            "\n" +
            "    return common_multiple;\n" +
            "};\n" +
            "\n" +
            "console.log(smallestCommons([2, 10])); // 2520\n",
    },
    {
        name: "Drop it",
        description: `<p>Given the array 'arr', iterate through and remove each element starting from the first element (the 0 index) until the function 'func' returns 'true' when the iterated element is passed through it.</p>
        <p>Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.</p>`,
        code:
            "\nconst dropElements = (arr, func) => {\n" +
            "    for (let i = 0; i < arr.length; i++) {\n" +
            "        const filtered = func(arr[i]);\n" +
            "        if (filtered) {\n" +
            "            return arr.slice(i);\n" +
            "        }\n" +
            "    }\n" +
            "\n" +
            "    return [];\n" +
            "};\n" +
            "\n" +
            "console.log(dropElements([0, 1, 0, 1], (n) => n === 1)); // [1, 0, 1]\n",
    },
    {
        name: "Steamroller",
        description: `<p>Flatten a nested array. You must account for varying levels of nesting.</p>`,
        code:
            "\nconst steamrollArray = (arr) => {\n" +
            "    const flat = [];\n" +
            "\n" +
            "    for (let i = 0; i < arr.length; i++) {\n" +
            "        let elem = arr[i];\n" +
            "\n" +
            "        if (!Array.isArray(elem)) {\n" +
            "            flat.push(elem);\n" +
            "            continue;\n" +
            "        }\n" +
            "\n" +
            "        let counter = 0;\n" +
            "        while (counter <= arr[i].length) {\n" +
            "            for (let j = 0; j < elem.length; j++) {\n" +
            "                if (!Array.isArray(elem[j])) {\n" +
            "                    flat.push(elem[j]);\n" +
            "                    continue;\n" +
            "                }\n" +
            "\n" +
            "                counter -= 1;\n" +
            "                elem = elem[j];\n" +
            "                break;\n" +
            "            }\n" +
            "            counter += 2;\n" +
            "        }\n" +
            "    }\n" +
            "\n" +
            "    return flat;\n" +
            "};\n" +
            "\n" +
            "console.log(steamrollArray([1, {}, [3, [[4]]]])); // [1, {}, 3, 4]\n",
    },
    {
        name: "Binary Agents",
        description: `<p>Return an English translated sentence of the passed binary string.</p>
        <p>The binary string will be space separated.</p>`,
        code:
            "\nconst binaryAgent = (str) => {\n" +
            '    const binaries = str.slice().split(" ");\n' +
            '    let text = "";\n' +
            "\n" +
            "    for (let i = 0; i < binaries.length; i++) {\n" +
            "        const binary = binaries[i];\n" +
            "\n" +
            "        const binary_length = binary.length - 1;\n" +
            "        let binary_sum = 0;\n" +
            "        for (let j = 0; j < binary.length; j++) {\n" +
            "            const byte = binary[j];\n" +
            "\n" +
            "            if (byte == 1) {\n" +
            "                binary_sum += 2 ** (binary_length - j);\n" +
            "            }\n" +
            "        }\n" +
            "        text += String.fromCharCode(binary_sum);\n" +
            "    }\n" +
            "\n" +
            "    return text;\n" +
            "};\n" +
            "\n" +
            "console.log(\n" +
            "    binaryAgent(\n" +
            '        "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"\n' +
            "    )\n" +
            "); // Aren't bonfires fun!?\n",
    },
    {
        name: "Everything Be True",
        description: `<p>Check if the predicate (second argument) is truthy on all elements of a collection (first argument).</p>
        <p>In other words, you are given an array collection of objects. The predicate 'pre' will be an object property and you need to return 'true' if its value is 'truthy'. Otherwise, return 'false'</p>
        <p>In JavaScript, 'truthy' values are values that translate to 'true' when evaluated in a Boolean context.</p>
        <p>Remember, you can access object properties through either dot notation or '[]' notation.</p>`,
        code:
            "\nconst truthCheck = (collection, pre) => {\n" +
            "    for (let index = 0; index < collection.length; index++) {\n" +
            "        const element = collection[index];\n" +
            "        const truthy = Boolean(element[pre]);\n" +
            "        if (!truthy) return false;\n" +
            "    }\n" +
            "\n" +
            "    return true;\n" +
            "};\n" +
            "\n" +
            "console.log(\n" +
            "    truthCheck(\n" +
            "        [\n" +
            '            { name: "Quincy", role: "Founder", isBot: true },\n' +
            '            { name: "Naomi", role: "", isBot: false },\n' +
            '            { name: "Camperbot", role: "Bot", isBot: true },\n' +
            "        ],\n" +
            '        "isBot"\n' +
            "    )\n" +
            "); // false\n",
    },
    {
        name: "Arguments Optional",
        description: `<p>Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.</p>
        <p>For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.</p>
        <p>If either argument isn't a valid number, return undefined.</p>`,
        code:
            "\nconst addTogether = (a, b) => {\n" +
            '    if (typeof a == "number" && typeof b == "number") return a + b;\n' +
            '    if (typeof a == "string" || typeof b == "string") return undefined;\n' +
            "\n" +
            "    return (b) => {\n" +
            '        if (typeof b != "number") return undefined;\n' +
            "        return a + b;\n" +
            "    };\n" +
            "};\n" +
            "\n" +
            "console.log(addTogether(3)(3)); // 6\n",
    },
    {
        name: "Make a Person",
        description: `<p></p>`,
        code:
            "\nconst Person = function (firstAndLast) {\n" +
            "    // Only change code below this line\n" +
            "    // Complete the method below and implement the others similarly\n" +
            '    const names = firstAndLast.split(" ");\n' +
            "\n" +
            "    this.getFirstName = function () {\n" +
            "        return this.firstName;\n" +
            "    };\n" +
            "\n" +
            "    this.getLastName = function () {\n" +
            "        return this.lastName;\n" +
            "    };\n" +
            "\n" +
            "    this.getFullName = function () {\n" +
            "        return this.fullName;\n" +
            "    };\n" +
            "\n" +
            "    this.setFirstName = function (str) {\n" +
            "        this.firstName = str;\n" +
            "    };\n" +
            "\n" +
            "    this.setLastName = function (str) {\n" +
            "        this.lastName = str;\n" +
            "    };\n" +
            "\n" +
            "    this.setFullName = function (str) {\n" +
            "        this.fullName = str;\n" +
            "    };\n" +
            "\n" +
            "    return firstAndLast;\n" +
            "};\n" +
            "\n" +
            'const bob = new Person("Bob Ross");\n',
    },
    {
        name: "Map the Debris",
        description: `<p>According to Kepler's Third Law, the orbital period  T  of two point masses orbiting each other in a circular or elliptic orbit</p>
        <p>Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).</p>
        <p>The array will contain objects in the format '{name: 'name', avgAlt: avgAlt}'.</p>
        <p>The values should be rounded to the nearest whole number. The body being orbited is Earth.</p>
        <p>The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.</p>`,
        code:
            "\nconst orbitalPeriod = (arr) => {\n" +
            "    const GM = 398600.4418;\n" +
            "    const earthRadius = 6367.4447;\n" +
            "    const updated_orbitalPeriod = [];\n" +
            "\n" +
            "    for (let i = 0; i < arr.length; i++) {\n" +
            "        const satellite = arr[i];\n" +
            "        const flightVelocity = Math.sqrt(\n" +
            '            GM / (earthRadius + satellite["avgAlt"])\n' +
            "        );\n" +
            "        const orbitalPeriod =\n" +
            "            6.28318530718 *\n" +
            '            ((earthRadius + satellite["avgAlt"]) / flightVelocity);\n' +
            "\n" +
            "        const rounded_orbitalPeriod = Math.round((orbitalPeriod / 100) * 100);\n" +
            "\n" +
            "        updated_orbitalPeriod.push({\n" +
            '            name: satellite["name"],\n' +
            "            orbitalPeriod: rounded_orbitalPeriod,\n" +
            "        });\n" +
            "    }\n" +
            "\n" +
            "    return updated_orbitalPeriod;\n" +
            "};\n" +
            "\n" +
            "console.log(orbitalPeriod([{ name: \"sputnik\", avgAlt: 35873.5553 }])); // [{name: 'sputnik', orbitalPeriod: 86400}]\n",
    },
];
