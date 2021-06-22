import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

type Generation = {
    search: String
}

const initialState: Generation = {
    search: ''
}

export const generationSlice = createSlice({
    name: 'searchStore',
    initialState,
    reducers: {
        changeGeneration: (state, action) => {
            state.search = action.payload;
        },
    },
})

// change
export const { changeGeneration: changeSearch } = generationSlice.actions;

// get
export const getSearch = (state: RootState) => state.searchReducer.search;

export default generationSlice.reducer