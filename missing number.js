function findMissingNumber(nums) {
    const n = nums.length;
    const sumExpected = n * (n + 1) / 2;
    const sumActual = nums.reduce((acc, num) => acc + num, 0);
    return sumExpected - sumActual;
}
const nums = [3, 0, 1];
const missingNumber = findMissingNumber(nums);
console.log(`The missing number is: ${missingNumber}`);
