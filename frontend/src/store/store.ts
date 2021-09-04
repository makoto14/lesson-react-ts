import { configureStore } from '@reduxjs/toolkit';

import generationReducer from './generation';
import searchReducer from './searchStore';
import stockReducer from './stockStore';
import todoReducer from './todoStore';

export const store = configureStore({
    reducer: {
        generationReducer: generationReducer,
        searchReducer: searchReducer,
        stockReducer: stockReducer,
        todoReducer: todoReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
