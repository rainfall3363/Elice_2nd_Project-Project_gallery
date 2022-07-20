import { configureStore, createSlice } from '@reduxjs/toolkit';
//import { exhibitionProjects } from '../api/exhibition/exhibitionProject';
import axios from 'axios';

// let initialState = function () {
//   return axios.get('http://localhost:8000/api/exhibition/list');
// };
const project = createSlice({
  name: 'exhibitionProject',
  initialState: '',
  reducers: {},
});
export const { exhProjects } = project.actions;

export default configureStore({
  reducer: {
    project: project.reducer,
  },
});
