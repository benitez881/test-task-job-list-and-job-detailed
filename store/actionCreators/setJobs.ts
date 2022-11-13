import { Dispatch } from "redux";
import { Job } from "../reducers/jobsReducer";

const setJobs = (jobs: Job[]) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: "set_jobs",
      payload: {
        jobs,
      },
    });
  };
};

export default setJobs;
