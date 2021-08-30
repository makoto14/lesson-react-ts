import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

type Generation = {
    generation: number
}

const initialState: Generation = {
    generation: 0
}

export const generationSlice = createSlice({
    name: 'generation',
    initialState,
    reducers: {
        changeGeneration: (state, action) => {
            state.generation = action.payload;
        },
    },
})

// change
export const { changeGeneration } = generationSlice.actions;

// get
export const getGeneration = (state: RootState) => state.generationReducer.generation;

export default generationSlice.reducer
