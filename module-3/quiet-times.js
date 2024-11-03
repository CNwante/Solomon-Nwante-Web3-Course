async function activityTable(day) {
  // Read the list of log filenames from "camera_logs.txt"
  const fileListContent = await textFile("camera_logs.txt");
  const fileNames = fileListContent.split("\n");

  const hourlyActivityCounts = Array(24).fill(0);

  // Loop through each log file
  for (let fileName of fileNames) {
    const fileContent = await textFile(fileName);
    const timestamps = fileContent.split("\n");

    // Process each timestamp in the log file
    for (let timestampString of timestamps) {
      const timestamp = Number(timestampString.trim());
      const date = new Date(timestamp);

      // Check if the day of the week matches the specified day
      if (date.getDay() === day) {
        const hour = date.getHours();
        hourlyActivityCounts[hour]++;
      }
    }
  }

  return hourlyActivityCounts;
}


activityTable(2)
  .then(table => console.log(activityGraph(table)));
