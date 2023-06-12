export const sender = () => {
  const people = [
    "Prabhu Jagdish",
    "Chandan Ramakanta",
    "Satish Sahu",
    "John Paul Martin",
    "Amrutha Reddy",
  ];

  return people[Math.floor(Math.random() * 5)];
};
