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
/* 
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

console.log(convertHTML('Stuff in "quotation marks"')); // Stuff in &quot;quotation marks&quot;
 */

// Sum All Odd Fibonacci Numbers
/* 
const sumFibs = (num) => {
    let current = 1;
    let next = 0;
    let previous = 0;
    let sum_odd = 0;

    while (sum_odd < num) {
        previous = current;
        current = next;
        next = previous + current;

        if (current > num) return sum_odd;
        if (current % 2 == 1) sum_odd += current;
    }

    return sum_odd;
};

console.log(sumFibs(1000)); // 1785
 */

// Sum All Primes
/* 
const sumPrimes = (num) => {
    let sum_primes = 0;
    for (let i = 1; i <= num; i++) {
        let counter = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) counter += 1;
            if (counter == 3) break;
        }
        if (counter == 2) sum_primes += i;
    }
    return sum_primes;
};

console.log(sumPrimes(10)); // 17
 */

// Smallest Common Multiple
/* 
const smallestCommons = (arr) => {
    const prime_numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23];
    const sorted = arr.sort((a, b) => a - b);
    const numbers = [];
    for (let i = sorted[0]; i <= sorted[1]; i++) numbers.push(i);

    const common_multiple_multipliers = [];
    let common_multiple_found = false;
    let prime_index = 0;

    while (!common_multiple_found) {
        let change_prime = true;
        let add_multiplier = false;

        for (let j = 0; j < numbers.length; j++) {
            if (numbers[j] != 1) {
                const prime_division = numbers[j] / prime_numbers[prime_index];
                const is_integer = Number.isInteger(prime_division);
                if (is_integer) {
                    add_multiplier = true;
                    numbers[j] = prime_division;
                    const next_prime_division =
                        prime_division / prime_numbers[prime_index];
                    const next_is_integer =
                        Number.isInteger(next_prime_division);
                    if (next_is_integer) change_prime = false;
                }
            }
        }

        common_multiple_found = numbers.every((num) => num == 1);

        if (add_multiplier) {
            common_multiple_multipliers.push(prime_numbers[prime_index]);
        }

        if (change_prime) prime_index += 1;
    }

    let common_multiple = 1;
    common_multiple_multipliers.forEach((num) => (common_multiple *= num));

    return common_multiple;
};

console.log(smallestCommons([2, 10])); // 2520
 */

// Drop it
/* 
const dropElements = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        const filtered = func(arr[i]);
        if (filtered) {
            return arr.slice(i);
        }
    }

    return [];
};

console.log(dropElements([0, 1, 0, 1], (n) => n === 1)); // [1, 0, 1]
 */

// Steamroller
/* 
const steamrollArray = (arr) => {
    const flat = [];

    for (let i = 0; i < arr.length; i++) {
        let elem = arr[i];

        if (!Array.isArray(elem)) {
            flat.push(elem);
            continue;
        }

        let counter = 0;
        while (counter <= arr[i].length) {
            for (let j = 0; j < elem.length; j++) {
                if (!Array.isArray(elem[j])) {
                    flat.push(elem[j]);
                    continue;
                }

                counter -= 1;
                elem = elem[j];
                break;
            }
            counter += 2;
        }
    }

    return flat;
};

console.log(steamrollArray([1, {}, [3, [[4]]]])); // [1, {}, 3, 4]
 */

// Binary Agents
/* 
const binaryAgent = (str) => {
    const binaries = str.slice().split(" ");
    let text = "";

    for (let i = 0; i < binaries.length; i++) {
        const binary = binaries[i];

        const binary_length = binary.length - 1;
        let binary_sum = 0;
        for (let j = 0; j < binary.length; j++) {
            const byte = binary[j];

            if (byte == 1) {
                binary_sum += 2 ** (binary_length - j);
            }
        }
        text += String.fromCharCode(binary_sum);
    }

    return text;
};

console.log(
    binaryAgent(
        "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
    )
); // Aren't bonfires fun!?
 */

// Everything Be True
/* 
const truthCheck = (collection, pre) => {
    for (let index = 0; index < collection.length; index++) {
        const element = collection[index];
        const truthy = Boolean(element[pre]);
        if (!truthy) return false;
    }

    return true;
};

console.log(
    truthCheck(
        [
            { name: "Quincy", role: "Founder", isBot: true },
            { name: "Naomi", role: "", isBot: false },
            { name: "Camperbot", role: "Bot", isBot: true },
        ],
        "isBot"
    )
); // false
 */

// Arguments Optional
/* 
const addTogether = (a, b) => {
    if (typeof a == "number" && typeof b == "number") return a + b;
    if (typeof a == "string" || typeof b == "string") return undefined;

    return (b) => {
        if (typeof b != "number") return undefined;
        return a + b;
    };
};

console.log(addTogether(3)(3)); // 6
 */

// Make a Person
/* 
const Person = function (firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    const names = firstAndLast.split(" ");

    this.getFirstName = function () {
        return this.firstName;
    };

    this.getLastName = function () {
        return this.lastName;
    };

    this.getFullName = function () {
        return this.fullName;
    };

    this.setFirstName = function (str) {
        this.firstName = str;
    };

    this.setLastName = function (str) {
        this.lastName = str;
    };

    this.setFullName = function (str) {
        this.fullName = str;
    };

    return firstAndLast;
};

const bob = new Person("Bob Ross");
 */

// Map The Debris
/* 
const orbitalPeriod = (arr) => {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const updated_orbitalPeriod = [];

    for (let i = 0; i < arr.length; i++) {
        const satellite = arr[i];
        const flightVelocity = Math.sqrt(
            GM / (earthRadius + satellite["avgAlt"])
        );
        const orbitalPeriod =
            6.28318530718 *
            ((earthRadius + satellite["avgAlt"]) / flightVelocity);

        const rounded_orbitalPeriod = Math.round((orbitalPeriod / 100) * 100);

        updated_orbitalPeriod.push({
            name: satellite["name"],
            orbitalPeriod: rounded_orbitalPeriod,
        });
    }

    return updated_orbitalPeriod;
};

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }])); // [{name: 'sputnik', orbitalPeriod: 86400}]
 */
