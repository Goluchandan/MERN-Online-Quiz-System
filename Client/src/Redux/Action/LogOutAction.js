export const userLogOutAction = () => (dispatch) => {
    dispatch({ type: "USER_LOG_OUT_REQUEST" });
    try {
      localStorage.removeItem("currentUser");
      dispatch({ type: "USER_LOG_OUT_REQUEST_SUCCESS" });
    } catch (error) {
      dispatch({ type: "USER_LOG_OUT_REQUEST_FAILED", payload: error });
    }
  };