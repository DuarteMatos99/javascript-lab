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
