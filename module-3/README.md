# Module 3 Solutions

This directory contains the Module 3 solution exercises, demonstrating specific techniques or methods to solve common programming challenges. Each solution is explained in detail, capturing the logic and approach behind it.

## Features

- **[Quiet Times Solution](https://github.com/CNwante/Solomon-Nwante-Web3-Course/blob/main/module-3/build-a-table.js)**: Analyzes camera activation logs to determine hourly activity on a specified day, returning a histogram-like array of activation counts for each hour.
- **[Build a Table Solution](https://github.com/CNwante/Solomon-Nwante-Web3-Course/blob/main/module-3/quiet-times.js)**: Dynamically builds an HTML table that displays mountain data, including custom table headings and conditional styling for specific data columns.

## Solutions Overview

### [Quiet Times Solution](https://github.com/CNwante/Solomon-Nwante-Web3-Course/blob/main/module-3/build-a-table.js)

The **Quiet Times** exercise defines an asynchronous function `activityTable(day)` that analyzes camera activation timestamps, returning an array representing activity counts for each hour on a specified day.

- **Activity Array**: Initializes an array with 24 elements, each representing one hour (0 to 23).
- **File Retrieval**: Uses the `getFileNames` helper to retrieve filenames from `camera_logs.txt`.
- **Timestamp Processing**: Iterates over each timestamp and increments the count for the corresponding hour if it matches the specified day.
- **Helper Functions**:
  - `getFileNames`: Reads and returns a list of log filenames.
  - `getTimestampsFromFile`: Reads timestamps from each file.
  - `incrementHourlyActivity`: Increments activity count for matching timestamps.

### [Build a Table Solution](https://github.com/CNwante/Solomon-Nwante-Web3-Course/blob/main/module-3/quiet-times.js)

The **Build a Table** exercise dynamically constructs an HTML table in the DOM to display data about mountains, including conditional formatting for specific columns.

- **DOMContentLoaded Event**: Ensures the DOM is fully loaded before executing JavaScript.
- **Table Creation**:
  - **createTableHeadings**: Creates table headers using the keys from the mountain data and appends them to the table.
  - **createTableRows**: Loops through mountain data to create rows, adding conditional styling for specific data (e.g., aligning "height" values to the right).
- **DOM Manipulation**: Appends the dynamically created table to a designated `div` element in the HTML file.

## Tech

This directory uses native JavaScript methods and demonstrates the following key concepts:

- **Asynchronous Programming**: Uses async functions and helper methods to process large datasets.
- **Array Manipulation**: Utilizes methods like `map` and `Array.fill`.
- **DOM Manipulation**: Dynamically creates and appends HTML elements based on data structure.
- **Date and Time Processing**: Uses JavaScript’s `Date` object to filter and count events by day and hour.

## How to Use

- Clone the repository and navigate to this directory.
- Refer to each exercise to understand the problem statements and the approaches taken.
- Experiment with each solution by modifying data sources, parameters, or DOM elements.
- For the `Quiet Times Solution`, you need to run the code in the [Eloquent JavaScript Sandbox](https://eloquentjavascript.net/code/#11)

## Conclusion

Through these exercises, I have strengthened my understanding of JavaScript asynchronous programming, data handling, and DOM manipulation. By working through real-world problems, I’ve gained hands-on experience with techniques like processing large datasets, dynamically building HTML elements, and analyzing data based on time intervals. These skills have enhanced my ability to structure JavaScript programs for practical applications.
