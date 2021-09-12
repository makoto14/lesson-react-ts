import { createSlice } from '@reduxjs/toolkit';
import { ShoppingCartItemType, ShoppingItemType } from '../type/ShoppingCartItemType';
import { RootState } from './store';

type Generation = {
    shoppingItem: Array<ShoppingItemType>,
    shoppingCart: Array<ShoppingCartItemType>,
}

const initialState: Generation = {
    shoppingItem: new Array<ShoppingItemType>(),
    shoppingCart: new Array<ShoppingCartItemType>(),
}

export const generationSlice = createSlice({
    name: 'stockStore',
    initialState,
    reducers: {
        setItemGeneration: (state, action) => {
            state.shoppingItem = action.payload;
        },
        addCartGeneration: (state, action) => {
            state.shoppingCart.push(action.payload);
        }
    },
})

// change
export const {
    setItemGeneration: setShoppingItem,
    addCartGeneration: addCartStore,
} = generationSlice.actions;

// get
export const getShoppingItem = (state: RootState) => state.shoppingReducer.shoppingItem;
export const getShoppingCart = (state: RootState) => state.shoppingReducer.shoppingCart;

export default generationSlice.reducer
