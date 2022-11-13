import { Job } from "../reducers/jobsReducer";

const setJobs = (jobs: Job[]) => {
  return (dispatch: any) => {
    dispatch({
      type: "set_jobs",
      payload: {
        jobs,
      },
    });
  };
};

export default setJobs;
