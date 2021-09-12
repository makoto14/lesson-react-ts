import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getShoppingCart, getShoppingItem, setShoppingItem } from '../../store/shoppingStore';
import { ShoppingItemType, ShoppingCartItemType } from '../../type/ShoppingCartItemType';
import CircularIndeterminate from '../loader';
import ShoppingItemCard from './ShoppingItemCard';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: '24px',
        },
        cartContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            margin: '16px'
        }
    }),
);

const ShoppingMain = () => {

    const END_POINT = `https://fakestoreapi.com/products`;
    const classes = useStyles();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = React.useState(true);
    let shoppingItemList: Array<ShoppingItemType> = useSelector(getShoppingItem);
    let shoppingCartItemList: Array<ShoppingCartItemType> = useSelector(getShoppingCart);

    const requestShoppingItem = () => {
        fetch(END_POINT)
            .then(res => {
                const json = res.json();
                return json;
            })
            .then(res => {
                const itemList: Array<ShoppingItemType> = res;
                console.log(itemList);
                dispatch(setShoppingItem(itemList));
            })
            .then(() => setIsLoading(false));
    }

    let item;
    if (isLoading === null || shoppingItemList.length === 0) {
        item = <CircularIndeterminate></CircularIndeterminate>
    } else {
        item = shoppingItemList.map((value) => <ShoppingItemCard item={value} />)
    }

    React.useEffect(() => {
        requestShoppingItem();
    }, [])

    return (
        <div className={classes.root}>
            {JSON.stringify(shoppingCartItemList)}
            <Button color="primary" onClick={requestShoppingItem}>fetch Shopping Item</Button>
            <div className={classes.cartContainer}>
                {item}
            </div>
        </div>
    );
}

export default ShoppingMain;