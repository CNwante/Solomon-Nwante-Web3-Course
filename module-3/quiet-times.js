async function activityTable(day) {
  let logFileList = await textFile("camera_logs.txt");
  // Your code here
  let fileArray = logFileList.split("\n");

  let hourCounts = Array(24).fill(0);

  for (let file of fileArray) {
    let timestamp = await textFile(file)
    let timestampsArray = timestamp.split("\n");

    for (let time of timestampsArray) {
      let trim = Number(time.trim())
      let date = new Date(trim)
      if (date.getDay() == day) {
        hourCounts[date.getHours()]++
      }
    }

  }
  return hourCounts;
}

activityTable(2)
  .then(table => console.log(activityGraph(table)));
