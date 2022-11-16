import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import apiService from '../api-service';
import { RootState } from '../store';

// export interface IData {
//   some:string[]
// }
// export interface INormalizedData {
//   data?: { [key: string]: IData };

// }
// interface IRootState {
//   names:string[]
// }
export interface IDataEntity {
  names: string[];
}
// const initialState: IDataEntity = {
//   names: [],
export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits',
      );
      // if(!response.ok){
      //   throw new Error('server error!')
      // }
      const data = await response.json();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
const datasAdapter = createEntityAdapter<IDataEntity>();

const rootSlice = createSlice({
  name: 'root',
  initialState: datasAdapter.getInitialState<{
    names: string[];
    todos: any[];
    status: any;
    error: any;
  }>({
    names: [],
    todos: [],
    status: null,
    error: null,
  }),
  reducers: {
    addName: (state, { payload }: PayloadAction<string>) => {
      state.names.push(payload);
    },
    removeName: (state, { payload }: PayloadAction<number>) => {
      state.names = state.names.filter((name, index) => index !== payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, { payload }) => {
        state.names.push(payload);
      })
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, { payload }) => {
        state.status = 'resolved';
        state.todos = payload;
      })
      .addCase(fetchTodos.rejected, (state, { payload }) => {
        state.status = 'rejected';
        state.error = payload;
      });
  },
});

export const fetchData = createAsyncThunk('root/fetchData', () => {
  try {
    return 'fetchData';
  } catch (e: any) {
    return '';
  }
});

export const selectRoot = (state: RootState) => state.rootReducer;

export const { addName, removeName } = rootSlice.actions;

export default rootSlice.reducer;
