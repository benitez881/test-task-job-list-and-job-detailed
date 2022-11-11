const defaultState = {
  jobs: {},
  page: 1,
};

export const jobsReducer = (state = defaultState, action: any) => {
  const { payload } = action;
  switch (action.type) {
    case "set_jobs":
      return {
        ...state,
        jobs: payload.jobs,
      };
    case "set_page":
      return {
        ...state,
        page: payload.page,
      };
    default:
      return state;
  }
};
