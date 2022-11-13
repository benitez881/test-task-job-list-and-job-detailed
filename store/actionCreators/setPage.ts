import { Dispatch } from "redux";
import { Job } from "../reducers/jobsReducer";

const setPage = (page: number) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: "set_page",
      payload: {
        page,
      },
    });
  };
};

export default setPage;
