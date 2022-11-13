const defaultState = {
  jobs: [],
  page: 1,
};
enum Actions {
  set_jobs = "set_jobs",
  set_page = "set_page",
}

export type storeState = {
  jobs: Job[] | [];
  page: number;
};
export type Job = {
  id: string;
  name: string;
  email: string;
  phone: string;
  title: string;
  address: string;
  description: string;
  benefits: string[];
  employment_type: string[];
  pictures: string[];
  salary: string;
  createdAt: Date;
  updatedAt: Date;
  location: { lat: number; long: number };
};
type Action = {
  type: Actions;
  payload: {
    jobs: Job[] | [];
    page: number;
  };
};

export const jobsReducer = (
  state: storeState = defaultState,
  action: Action
) => {
  const { payload } = action;

  switch (action.type) {
    case Actions.set_jobs:
      return {
        ...state,
        jobs: payload.jobs,
      };
    case Actions.set_page:
      return {
        ...state,
        page: payload.page,
      };
    default:
      return state;
  }
};
