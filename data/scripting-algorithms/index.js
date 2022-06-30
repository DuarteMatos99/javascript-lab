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
];
