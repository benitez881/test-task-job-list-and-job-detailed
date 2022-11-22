import { Dispatch } from "redux";
import { Job } from "../reducers/jobsReducer";
import { Actions } from "../types";

const setPage = (page: number) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: Actions.SET_PAGE,
      payload: {
        page,
      },
    });
  };
};

export default setPage;
