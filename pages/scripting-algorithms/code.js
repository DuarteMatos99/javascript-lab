/* // Sum All Numbers in a Range
const sumAll = (arr) => {
    const copy_arr = [...arr];
    const high_num = Math.max(...copy_arr);
    const min_num = Math.min(...copy_arr);
    let final_sum = 0;

    for (let i = min_num; i <= high_num; i++) {
        final_sum += i;
    }

    return final_sum;
};

console.log(sumAll([1, 4])); // 10 */
