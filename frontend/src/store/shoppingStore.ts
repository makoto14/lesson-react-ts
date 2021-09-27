import { createSlice } from '@reduxjs/toolkit';
import { ShoppingCartAndItemType, ShoppingCartItemType, ShoppingItemType } from '../type/ShoppingCartItemType';
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
    name: 'shoppingStore',
    initialState,
    reducers: {
        setItemGeneration: (state, action) => {
            state.shoppingItem = action.payload;
        },
        addCartGeneration: (state, action) => {
            const targetItemId: number = action.payload.id;
            const targetCartIndex: number = state.shoppingCart.findIndex((value) => value.id === targetItemId);
            if (targetCartIndex === -1) {
                const newCartItem: ShoppingCartItemType = {
                    id: targetItemId,
                    count: action.payload.count,
                };
                state.shoppingCart.push(newCartItem);
            } else {
                const newCount: number = state.shoppingCart[targetCartIndex].count + action.payload.count;
                if (newCount <= 0) {
                    // delete state.shoppingCart[targetCartIndex];
                    state.shoppingCart.splice(targetCartIndex, 1);
                } else {
                    state.shoppingCart[targetCartIndex] = {
                        id: targetItemId,
                        count: newCount,
                    }
                }
            }
        }
    },
})

// change
export const {
    setItemGeneration: setShoppingItem,
    addCartGeneration: addCartStore,
} = generationSlice.actions;

// get
export const getShoppingItem = (state: RootState): Array<ShoppingItemType> => state.shoppingReducer.shoppingItem;
export const getShoppingCart = (state: RootState): Array<ShoppingCartItemType> => state.shoppingReducer.shoppingCart;
export const getShoppingCartAndItem = (state: RootState): Array<ShoppingCartAndItemType> => {
    let resultList: Array<ShoppingCartAndItemType> = new Array<ShoppingCartAndItemType>();
    for (const item of state.shoppingReducer.shoppingCart) {
        const targetItem: ShoppingItemType | undefined = state.shoppingReducer.shoppingItem.find((value: ShoppingItemType) => value.id === item.id);
        const result: ShoppingCartAndItemType = {
            id: item.id,
            cart: item,
            itemMst: targetItem,
        }
        resultList.push(result);
    }
    return resultList;
};

export default generationSlice.reducer
