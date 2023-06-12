export const getTruncatedSubject = (str: String) => {
  if (str.length > 30) {
    return str.substring(0, 30) + "...";
  } else {
    return str;
  }
};
