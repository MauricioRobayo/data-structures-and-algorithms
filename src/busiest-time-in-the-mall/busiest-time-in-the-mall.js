function findBusiestPeriod(data) {
  const EXIT = 0;

  let runningVisitors = 0;
  let maxVisitors = 0;
  let timestamp = 0;

  data.forEach(([time, visitors, status], index) => {
    const [nextTime] = data[index + 1] || [null];

    runningVisitors += status === EXIT ? -visitors : visitors;

    if (nextTime === time) {
      return;
    }

    if (runningVisitors > maxVisitors) {
      maxVisitors = runningVisitors;
      timestamp = time;
    }
  });
  return timestamp;
}

const data = [
  [1487799425, 14, 1],
  [1487799425, 4, 0],
  [1487799425, 2, 0],
  [1487800378, 10, 1],
  [1487801478, 18, 0],
  [1487801478, 18, 1],
  [1487901013, 1, 0],
  [1487901211, 7, 1],
  [1487901211, 1, 0],
];

console.log(findBusiestPeriod(data));
