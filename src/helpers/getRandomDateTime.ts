export const getRandomDateTime = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const today = new Date();
  let month = months[today.getMonth()];
  let date = today.getDate();
  date = date - Math.floor(Math.random() * date);

  let hour = today.getHours() - Math.floor(Math.random() * 12);
  if (hour < 0) hour = -1 * hour;
  let unit;
  if (hour > 12) {
    hour = hour - 12;
    unit = "PM";
  } else {
    unit = "AM";
  }
  let min = today.getMinutes();
  return `2023 ${month} ${date}, ${hour < 10 ? 0 : ""}${hour}:${
    min < 10 ? 0 : ""
  }${min} ${unit}`;
};
