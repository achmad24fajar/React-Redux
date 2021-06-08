const initialState = {
  login: false,
  register: false,
};
const modalReducer = (state = initialState, action) => {
  console.log("reducer", action.type);
  switch (action.type) {
    case "Login":
      return {
        login: true,
        register: false,
      };
    case "Register":
      return {
        login: false,
        register: true,
      };
    case "Close":
      return initialState;
    default:
      return state;
  }
};

export default modalReducer;
