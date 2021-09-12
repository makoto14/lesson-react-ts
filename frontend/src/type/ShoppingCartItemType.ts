export type ShoppingCartItemType = {
    id: number;
};

export type ShoppingItemType = {
    id: number;
    title: string;
    image: string;
    description: string;
    category: string;
    rating: ShoppingItemRate;
}

export type ShoppingItemRate = {
    rate: number;
    count: number;
}
