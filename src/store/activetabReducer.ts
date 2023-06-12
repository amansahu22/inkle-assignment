type actionType = {
  type: String;
  data: any;
};

export const tabData = (data = "", action: actionType) => {
  switch (action.type) {
    case "SET_CURRENT_TAB":
      localStorage.setItem("active_tab", action.data);
      return action.data;
    default:
      return data;
  }
};
