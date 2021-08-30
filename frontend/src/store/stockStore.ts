import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

type Generation = {
    stcok: any
}

const initialState: Generation = {
    stcok: null
}

export const generationSlice = createSlice({
    name: 'stockStore',
    initialState,
    reducers: {
        changeGeneration: (state, action) => {
            state.stcok = action.payload;
        },
    },
})

// change
export const { changeGeneration: changeStock } = generationSlice.actions;

// get
export const getStock = (state: RootState) => state.stockReducer.stcok;

export default generationSlice.reducer
