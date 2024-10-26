# Module 2 Solutions

This directory contains the modele 2 solution exercises, demonstrating specific techniques or methods to solve common programming challenges. Each solution is explained in detail, capturing the logic and approach behind it.

## Features

- **[Flattening Solution](https://github.com/CNwante/Solomon-Nwante-Web3-Course/blob/main/module-2/flattening.js)**: Utilizes JavaScript's `reduce` and `concat` methods to flatten nested arrays.
- **[Custom Loop Solution](https://github.com/CNwante/Solomon-Nwante-Web3-Course/blob/main/module-2/your-own-loop.js)**: Implements a loop function that mimics generic loop functions, allowing external control of initialization and conditions.
- **[Custom Every Method Solution](https://github.com/CNwante/Solomon-Nwante-Web3-Course/blob/main/module-2/everything.js)**: A custom implementation of JavaScript's `every` method using both a loop and the `some` method.
- **[Dominant Writing Direction Solution](https://github.com/CNwante/Solomon-Nwante-Web3-Course/blob/main/module-2/dominant-writing-direction.js)**: Determines the dominant writing direction of a given string based on language scripts using helper functions.

## Solutions Overview

### [Flattening Solution](#)

Defines a function called `flat`, which takes an array of arrays. It uses the `reduce` method in combination with the `concat` method to flatten the given array into a one-dimensional array.

### [Custom Loop Solution](#)

The solution for the **"Your Own Loop" exercise** defines a custom loop function called `loop` with four parameters:

- **value**: The initial value to iterate over.
- **test**: A function that checks a condition.
- **update**: A function that updates the current value.
- **body**: A function that takes the test value as an argument.

This solution ensures the original value remains unmutated and provides flexibility in defining conditions outside the loop.

### [Custom Every Method Solution](#)

The **"Everything" exercise** provides two implementations of a custom `every` function:

1. **Using a loop**: Iterates over each item and returns `false` if any test fails; otherwise, returns `true`.
2. **Using the `some` method**: Uses `Array.some` to achieve the same effect by negating the result.

### [Dominant Writing Direction Solution](#)

The **"Dominant Writing Direction" exercise** determines the dominant writing direction in a given string using imported language scripts.

- **Importing Scripts**: Utilizes the `SCRIPTS` array from an external module.
- **Counting Directions**: Accumulates counts of language writing directions.
- **Finding the Dominant Direction**: Reduces accumulated directions to find the dominant one.
- **Helper Functions**: Includes helper functions to determine script direction based on Unicode and counts occurrences.

## Tech

This directory uses native JavaScript methods and demonstrates the following key concepts:

- **Array Manipulation**: Working with `reduce`, `concat`, `every`, `some`, and loops.
- **Higher-Order Functions**: Passing functions as arguments to achieve custom looping and conditional checking.
- **Unicode and Text Analysis**: Identifying writing directions based on Unicode values and character scripts.

## How to Use

- Clone the repository and navigate to this directory.
- Refer to each exercise to understand the problem statement and the approach taken.
- Modify and experiment with each solution to strengthen your understanding of JavaScript methods and higher-order functions.

## Conclusion

The solutions in this directory demonstrate effective ways to solve common JavaScript algorithmic challenges, focusing on array manipulation, custom loops, and text-based logic. By exploring these examples, developers can enhance their understanding and become more proficient in JavaScript.
