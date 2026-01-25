console.log("Time Complexity Examples");

// Example 1: O(1) - Constant Time Complexity
function getFirstElement(arr) {
    return arr[0];
}

// ========================================
// QUESTION 1: Sum of All Array Elements
// ========================================
// Problem: Diya gaya array ka sum calculate karo
// Time Complexity: O(n)
// Space Complexity: O(1)

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log("\n--- Question 1: Sum of Array ---");
console.log("Array: [1, 2, 3, 4, 5]");
console.log("Sum:", sumArray([1, 2, 3, 4, 5])); // Output: 15

// ========================================
// QUESTION 2: Find Maximum Element in Array
// ========================================
// Problem: Array mein sabse bada element dhundho
// Time Complexity: O(n)
// Space Complexity: O(1)

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log("\n--- Question 2: Find Maximum Element ---");
console.log("Array: [10, 25, 8, 42, 15]");
console.log("Maximum:", findMax([10, 25, 8, 42, 15])); // Output: 42 