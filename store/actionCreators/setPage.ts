import { Job } from "../reducers/jobsReducer";

const setPage = (page: number) => {
  return (dispatch: any) => {
    dispatch({
      type: "set_page",
      payload: {
        page,
      },
    });
  };
};

export default setPage;
