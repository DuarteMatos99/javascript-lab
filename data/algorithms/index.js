export const algorithms = [
    {
        name: "Find the Symmetric Difference",
        description: `<p>The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.</p>
        <p>Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time.</p>
        <p>Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}. Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).</p>`,
        code:
            "\nconst sym = (...args) => {\n" +
            "    const copy_args = [...args];\n" +
            "    let last_set = [...new Set(copy_args[0])];\n" +
            "\n" +
            "    for (let i = 1; i < copy_args.length; i++) {\n" +
            "        const current_set = [...new Set(copy_args[i])];\n" +
            "        const joined_sets = last_set.concat(current_set);\n" +
            "\n" +
            "        const duplicate_values = joined_sets.filter(\n" +
            "            (item, index) => joined_sets.indexOf(item) !== index\n" +
            "        );\n" +
            "\n" +
            "        const removed_duplicates = joined_sets.filter(\n" +
            "            (item) => !duplicate_values.includes(item)\n" +
            "        );\n" +
            "\n" +
            "        const final_set = removed_duplicates.sort((a, b) => a - b);\n" +
            "\n" +
            "        last_set = final_set;\n" +
            "    }\n" +
            "\n" +
            "    return last_set;\n" +
            "};\n" +
            "\n" +
            "console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));\n",
    },
    {
        name: "Inventory Update",
        description:
            "<p>Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.</p>",
        code:
            "\nconst updateInventory = (arr1, arr2) => {\n" +
            "    const current_inventory = [...arr1];\n" +
            "    const new_inventory = [...arr2];\n" +
            "    const joined_inventory = current_inventory.concat(new_inventory);\n" +
            "    const updated_inventory = [];\n" +
            "    const assigned_items = [];\n" +
            "\n" +
            "    for (let i = 0; i < joined_inventory.length; i++) {\n" +
            "        const cur_item_name = joined_inventory[i][1];\n" +
            "\n" +
            "        const inventory_matches = joined_inventory.filter(\n" +
            "            (data) =>\n" +
            "                data[1] == cur_item_name &&\n" +
            "                !assigned_items.includes(cur_item_name)\n" +
            "        );\n" +
            "        assigned_items.push(cur_item_name);\n" +
            "\n" +
            "        if (inventory_matches.length > 0) {\n" +
            "            let item_stock = 0;\n" +
            "            for (let index in inventory_matches) {\n" +
            "                item_stock += Number(inventory_matches[index][0]);\n" +
            "            }\n" +
            "            updated_inventory.push([item_stock, inventory_matches[0][1]]);\n" +
            "        }\n" +
            "    }\n" +
            "    \n" +
            "    const final_inventory = updated_inventory.sort((a, b) => a[1].localeCompare(b[1]));\n" +
            "    return final_inventory\n" +
            "};\n" +
            "\n" +
            "var curInv = [\n" +
            '    [21, "Bowling Ball"],\n' +
            '    [2, "Dirty Sock"],\n' +
            '    [1, "Hair Pin"],\n' +
            '    [5, "Microphone"]\n' +
            "];\n" +
            "\n" +
            "var newInv = [\n" +
            '    [2, "Hair Pin"],\n' +
            '    [3, "Half-Eaten Apple"],\n' +
            '    [67, "Bowling Ball"],\n' +
            '    [7, "Toothpaste"]\n' +
            "];\n" +
            "\n" +
            "updateInventory(curInv, newInv);\n",
    },
];
