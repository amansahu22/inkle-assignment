type actionType = {
  type: String;
  data: any;
};

export const mailData = (data = [], action: actionType) => {
  switch (action.type) {
    case "SET_MAIL_LIST":
      return [...action.data];
    default:
      return data;
  }
};
