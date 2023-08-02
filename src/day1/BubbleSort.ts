export default function bubble_sort(arr: number[]): void {
    // This line starts a loop that goes through the array from the beginning to the end.
    // The loop uses a variable "i" to keep track of the current position in the array.
    for (let i = 0; i < arr.length; i++) {
        // This line starts another loop inside the first loop. It goes through the array from the beginning to the "arr.length - 1 - i" position.
        // The reason for "arr.length - 1 - i" is to avoid unnecessary comparisons.
        for (let j = 0; j < arr.length - 1 - i; j++) {
            // This line checks if the number at the current position (j) in the array is greater than the number at the next position (j + 1).
            // If it is, that means the two numbers are in the wrong order and need to be swapped.
            if (arr[j] > arr[j + 1]) {
                // This block of code swaps the two numbers at positions j and j + 1 in the array.
                // The number at position j is temporarily stored in a variable called "tmp".
                // Then, the number at position j is replaced with the number at position j + 1, and the number at position j + 1 is replaced with the value of "tmp".
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}
