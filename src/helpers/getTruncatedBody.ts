export const getTruncatedBody = (str: String) => {
  if (str.length > 90) {
    return str.substring(0, 90) + "...";
  } else {
    return str;
  }
};
