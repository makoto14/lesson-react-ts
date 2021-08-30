import { configureStore } from '@reduxjs/toolkit';

import generationReducer from './generation';
import searchReducer from './searchStore';
import stockReducer from './stockStore';

export const store = configureStore({
    reducer: {
        generationReducer: generationReducer,
        searchReducer: searchReducer,
        stockReducer: stockReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
