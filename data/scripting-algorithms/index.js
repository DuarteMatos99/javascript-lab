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
            "console.log(sumAll([1, 4])); // 10 \n",
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
            "console.log(diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5])); // [6,4]\n",
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
            "console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [1,1]\n",
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
            "); // [{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }]\n",
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
            'console.log(spinalCase("thisIsSpinalTap")); // this-is-spinal-tap\n',
    },
];
