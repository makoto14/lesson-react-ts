import { configureStore } from '@reduxjs/toolkit';

import generationReducer from './generation';
import searchReducer from './searchStore';

export const store = configureStore({
    reducer: {
        generationReducer: generationReducer,
        searchReducer: searchReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;