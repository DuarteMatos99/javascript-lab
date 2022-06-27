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
