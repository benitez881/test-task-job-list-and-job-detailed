import { Dispatch } from "redux";
import { Job } from "../reducers/jobsReducer";
import { Actions } from "../types";

const setJobs = (jobs: Job[]) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: Actions.SET_JOBS,
      payload: {
        jobs,
      },
    });
  };
};

export default setJobs;
