export const getRandomDate = () => {
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

  return `${month} ${date}`;
};
