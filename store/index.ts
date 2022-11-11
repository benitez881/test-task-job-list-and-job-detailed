import { jobsReducer } from "./reducers/jobsReducer";
import { configureStore, combineReducers, createStore } from "@reduxjs/toolkit";
const rootReducer = combineReducers({
  jobs: jobsReducer,
});

export const store = createStore(rootReducer);
