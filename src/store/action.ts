export const mailData = () => {
  return {
    type: "GET_MAIL_LIST",
  };
};

export const setCurrentActiveTag = (data: string) => {
  return {
    type: "SET_CURRENT_TAB",
    data,
  };
};
