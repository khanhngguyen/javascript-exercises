/* 
input: [array], [item to remove]
e.g. [1, 2, 3, 4, 5], [1, 5] => [2, 3, 4]
check every item in [array], if matches items in [item to remove] => remove from [array]
OR check every item in [array], if NOT match items in [item to remove] => return
=> run a function for each item in [array], check if not match
 */

const removeFromArray = function(arr, ...toRemove) {
    let result = [];
    arr.forEach((item) => {
        if (toRemove.includes(item) === false) {
            return result.push(item);
        }
    });
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
