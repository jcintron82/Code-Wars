// Given an array of numbers, return the difference between the largest and smallest values.

// For example:

// [23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

// [1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).


function betweenExtremes(numbers) {
    const sortedArr = numbers.sort((a, b) => {return a - b});
    const highNum = sortedArr.splice(-1,1);
    const lowNum = sortedArr.splice(0,1);
    return (highNum[0] - lowNum[0]);
  }
