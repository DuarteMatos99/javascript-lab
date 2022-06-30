// Sum All Numbers in a Range
/* const sumAll = (arr) => {
    const copy_arr = [...arr];
    const high_num = Math.max(...copy_arr);
    const min_num = Math.min(...copy_arr);
    let final_sum = 0;

    for (let i = min_num; i <= high_num; i++) {
        final_sum += i;
    }

    return final_sum;
};

console.log(sumAll([1, 4])); // 10 
 */

// Diff Two Arrays
/* const diffArray = (arr1, arr2) => {
    const first_array = arr1.slice();
    const second_array = arr2.slice();

    const first_filtered = first_array.filter(
        (item, index) => !second_array.includes(item)
    );
    const second_filtered = second_array.filter(
        (item, index) => !first_array.includes(item)
    );

    const final_arr = [...first_filtered, ...second_filtered];
    return final_arr;
};

console.log(diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5])); // [6,4]
 */

// Seek and Destroy
/* const destroyer = (...args) => {
    const arr = args[0].slice();

    for (let i = 1; i < args.length; i++) {
        const indexes_to_remove = arr
            .map((item, index) => {
                if (item == args[i]) return index;
            })
            .filter((item, index) => item != undefined);

        for (let index in indexes_to_remove) {
            arr[indexes_to_remove[index]] = undefined;
        }
    }

    return arr.filter((item, index) => item != undefined);
};

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [1,1]
 */

// Wherefore art thou
/* const whatIsInAName = (collection, source) => {
    const chosen_indexes = collection.map(() => []);
    const source_length = Object.keys(source).length;

    for (const [source_key, source_value] of Object.entries(source)) {
        for (let i = 0; i < collection.length; i++) {
            for (const [collection_key, collection_value] of Object.entries(
                collection[i]
            )) {
                if (
                    source_key === collection_key &&
                    source_value === collection_value
                )
                    chosen_indexes[i].push(i);
            }
        }
    }
    const arr = chosen_indexes
        .filter((group) => group.length == source_length)
        .map((item) => collection[item[0]]);
    return arr;
};

console.log(
    whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
        apple: 1,
    })
); // [{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }]
 */

// Spinal Tap Case
/* const spinalCase = (str) => {
    const clean_str = str.replace(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/\s]/g, " ");
    const splited_by_uppercase = clean_str.split(/(?=[A-Z\s])/);
    const splited_no_spaces = splited_by_uppercase
        .filter((item) => item != " ")
        .map((item) => item.trim());
    const joined_str = splited_no_spaces.join("-");
    const lower_str = joined_str.toLowerCase();
    return lower_str;
};

console.log(spinalCase("thisIsSpinalTap")); // this-is-spinal-tap
 */

//Pig Latin
/* 
const translatePigLatin = (arg) => {
    const vowels = ["a", "e", "i", "o", "u"];
    let str = arg.slice();
    let word = arg.slice();
    let counter = 0;

    for (let i = 0; i < str.length; i++) {
        const first_letter = str[i];
        const is_vowel = vowels.includes(first_letter);

        if (is_vowel) {
            i == 0 ? (word += "way") : (word += "ay");
            break;
        } else if (str.length - 1 == counter) str += "ay";

        word = word.slice(1, word.length) + first_letter;
        counter += 1;
    }

    return word;
};

console.log(translatePigLatin("rhythm")); // rhythmay
 */

// Search and Replace
/* 
const myReplace = (str, before, after) => {
    let sentence = str.slice();
    let replace_word = after.slice();
    const splited_sentence = sentence.split(" ");
    const sentence_replaced = splited_sentence.map((word) => {
        if (word == before) {
            const first_word_letter = word[0];
            let first_replace_word_letter = replace_word[0].toLowerCase();

            if (first_word_letter == first_word_letter.toUpperCase()) {
                first_replace_word_letter =
                    first_replace_word_letter.toUpperCase();
            }

            replace_word =
                first_replace_word_letter +
                replace_word.slice(1, replace_word.length);

            return replace_word;
        }

        return word;
    });

    return sentence_replaced.join(" ");
};

console.log(
    myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped")
); // A quick brown fox Leaped over the lazy dog
 */

// DNA Pairing
/* 
const pairElement = (str) => {
    const pairs = { A: "T", C: "G", G: "C", T: "A" };
    const single_genes = str.split("");
    console.log(single_genes);
    const dna_pairs = single_genes.map((item) => [item, pairs[item]]);

    return dna_pairs;
};

console.log(pairElement("CGC")); //[['C', 'G'], ['G', 'C'], ['C', 'G']]
 */

// Missing letters
/* 
const fearNotLetter = (str) => {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());

    const input_letters = str.slice();
    const input_array = input_letters.split("");
    const input_first_index = alphabet.indexOf(input_letters[0]);

    for (let i = 0; i < input_letters.length; i++) {
        if (input_array[i] != alphabet[input_first_index + i]) {
            return alphabet[input_first_index + i];
        }
    }

    return undefined;
};

console.log(fearNotLetter("stvwx")); //u
 */

// Sorted Union
/* 
const uniteUnique = (...arr) => {
    const args = [...arr];
    const unique_arr = [];

    args.forEach((arg) => {
        arg.forEach((item) => {
            !unique_arr.includes(item) && unique_arr.push(item);
        });
    });

    return unique_arr;
};

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4])); // [1, 2, 3, 5, 4]
 */

// Convert HTML Entities

const convertHTML = (str) => {
    const html_entities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&apos;",
        '"': "&quot;",
    };
    const str_splited = str.slice().split("");
    const entities = str_splited.map((item, index) => {
        const char = html_entities[item];
        if (char != undefined) return char;
        return item;
    });

    const final_str = entities.join("");
    return final_str;
};

console.log(convertHTML('Stuff in "quotation marks"'));
