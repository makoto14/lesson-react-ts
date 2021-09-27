export type ShoppingItemType = {
    id: number;
    title: string;
    image: string;
    description: string;
    category: string;
    rating: ShoppingItemRate;
};

export type ShoppingItemRate = {
    rate: number;
    count: number;
};

export type ShoppingCartItemType = {
    id: number;
    count: number;
};

export type ShoppingCartAndItemType = {
    id: number;
    cart : ShoppingCartItemType;
    itemMst: ShoppingItemType | undefined;
};
