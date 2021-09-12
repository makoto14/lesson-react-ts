import { configureStore } from '@reduxjs/toolkit';

import generationReducer from './generation';
import searchReducer from './searchStore';
import stockReducer from './stockStore';
import todoReducer from './todoStore';
import shoppingReducer from './shoppingStore';

export const store = configureStore({
    reducer: {
        generationReducer: generationReducer,
        searchReducer: searchReducer,
        stockReducer: stockReducer,
        todoReducer: todoReducer,
        shoppingReducer: shoppingReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
