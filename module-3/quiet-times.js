/**Quiet Times Exercise
 =======================*/
async function activityTable(day) {
  const fileNames = await getFileNames();
  const hourlyActivityCounts = Array(24).fill(0);

  for (let fileName of fileNames) {
    const timestamps = await getTimestampsFromFile(fileName);
    for (let timestamp of timestamps) {
      incrementHourlyActivity(hourlyActivityCounts, timestamp, day);
    }
  }

  return hourlyActivityCounts;
}

/**Example usage
 ================*/
activityTable(2)
  .then(table => console.log(activityGraph(table)));


/**Helper functions
 ====================*/
async function getFileNames() {
  const fileListContent = await textFile("camera_logs.txt");
  return fileListContent.split("\n");
}

async function getTimestampsFromFile(fileName) {
  const fileContent = await textFile(fileName);
  return fileContent.split("\n").map(time => Number(time.trim()));
}

function incrementHourlyActivity(hourlyCounts, timestamp, day) {
  const date = new Date(timestamp);
  if (date.getDay() === day) {
    const hour = date.getHours();
    hourlyCounts[hour]++;
  }
}

/**
 * Important Note
 * ==============
 * To execute this code successfully and view the expected output,
 * you need to run it in the Eloquent JavaScript Sandbox.
 * This is because the `activityGraph` function (which converts activity hours
 * to a histogram-like table)
 * and the `textFile` function (which reads files) are defined in the sandbox.
 *
 * Additionally, the "camera_logs.txt" activity log file is located in the sandbox.
 */

