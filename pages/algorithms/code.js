// Find the Symmetric Difference
/* const sym = (...args) => {
    const copy_args = [...args];
    let last_set = [...new Set(copy_args[0])];

    for (let i = 1; i < copy_args.length; i++) {
        const current_set = [...new Set(copy_args[i])];
        const joined_sets = last_set.concat(current_set);

        const duplicate_values = joined_sets.filter(
            (item, index) => joined_sets.indexOf(item) !== index
        );

        const removed_duplicates = joined_sets.filter(
            (item) => !duplicate_values.includes(item)
        );

        const final_set = removed_duplicates.sort((a, b) => a - b);

        last_set = final_set;
    }

    return last_set;
};

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));
 */

// Inventory Update
/* const updateInventory = (arr1, arr2) => {
    const current_inventory = [...arr1];
    const new_inventory = [...arr2];
    const joined_inventory = current_inventory.concat(new_inventory);
    const updated_inventory = [];
    const assigned_items = [];

    for (let i = 0; i < joined_inventory.length; i++) {
        const cur_item_name = joined_inventory[i][1];

        const inventory_matches = joined_inventory.filter(
            (data) =>
                data[1] == cur_item_name &&
                !assigned_items.includes(cur_item_name)
        );
        assigned_items.push(cur_item_name);

        if (inventory_matches.length > 0) {
            let item_stock = 0;
            for (let index in inventory_matches) {
                item_stock += Number(inventory_matches[index][0]);
            }
            updated_inventory.push([item_stock, inventory_matches[0][1]]);
        }
    }
    
    const final_inventory = updated_inventory.sort((a, b) => a[1].localeCompare(b[1]));
    return final_inventory
};

var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv); */

/* // Pairwise
const pairwise = (arr, arg) => {
    const all_items = arr.slice();
    const sum_key = arg;
    const indexes_used = [];
    let indexes_sum = 0;

    for (
        let first_pair_index = 0;
        first_pair_index < all_items.length;
        first_pair_index++
    ) {
        const first_pair = all_items[first_pair_index];

        for (
            let second_pair_index = 0;
            second_pair_index < all_items.length;
            second_pair_index++
        ) {
            const first_pair_index_used =
                indexes_used.includes(first_pair_index);
            const second_pair_index_used =
                indexes_used.includes(second_pair_index);

            if (
                first_pair_index != second_pair_index &&
                !first_pair_index_used &&
                !second_pair_index_used
            ) {
                const second_pair = all_items[second_pair_index];
                const sum_pairs = first_pair + second_pair;

                if (sum_pairs == sum_key) {
                    indexes_used.push(first_pair_index, second_pair_index);
                    indexes_sum += first_pair_index + second_pair_index;
                }
            }
        }
    }
    return indexes_sum;
};

console.log(pairwise([1, 4, 2, 3, 0, 5], 7)); // 11 */
