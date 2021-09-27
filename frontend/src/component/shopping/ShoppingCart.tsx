import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RemoveShoppingCart from '@material-ui/icons/RemoveShoppingCart';
import { ShoppingItemType, ShoppingCartItemType, ShoppingCartAndItemType } from '../../type/ShoppingCartItemType';
import { useDispatch, useSelector } from 'react-redux';
import { addCartStore, getShoppingCart, getShoppingCartAndItem, getShoppingItem } from '../../store/shoppingStore';
import React from 'react';
import Popover from '@material-ui/core/Popover';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    media: {
        height: 140,
    },
    emptyShoppingCart: {
        height: 140,
        width: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    cartPopover: {
        width: '400px'
    },
    cartItemConteiner: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        width: '500px',
    },
    content: {
        flex: '1 0 auto',
    },
    counter: {
        display: 'flex',
    },
    cover: {
        minWidth: '150px',
        minHeight: '150px',
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
    },
    playIcon: {
        height: 38,
        width: 38,
    },
});

export function ShoppingCart() {
    const [shoppingCartAnchorEl, setShoppingCartAnchorEl] = React.useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(shoppingCartAnchorEl);
    const classes = useStyles();
    const dispatch = useDispatch();
    let shoppingCartItemList: Array<ShoppingCartAndItemType> = useSelector(getShoppingCartAndItem);


    const handleShoppingCartOpen = (event: React.MouseEvent<HTMLElement>) => {
        setShoppingCartAnchorEl(event.currentTarget);
    };

    const handleShoppingCartClose = () => {
        setShoppingCartAnchorEl(null);
    };

    const addCart = (id: number) => () =>  {
        const item: ShoppingCartItemType = {
            id: id,
            count: 1
        }
        dispatch(addCartStore(item))
    }

    const minusCart = (id: number) => () =>  {
        const item: ShoppingCartItemType = {
            id: id,
            count: -1
        }
        dispatch(addCartStore(item))
    }

    let cartPopover;
    if (shoppingCartItemList.length === 0) {
        cartPopover = <div className={classes.emptyShoppingCart}>
                <RemoveShoppingCart />
                <Typography component="h5" variant="subtitle1">
                    Empty shopping cart.
                </Typography>
            </div>
    } else {
        cartPopover = shoppingCartItemList.map((value) => {
            return (
                <Card className={classes.cartItemConteiner}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="subtitle1">
                                {value.itemMst?.title}
                            </Typography>
                        </CardContent>
                        <div className={classes.counter}>
                            <Button variant="contained" onClick={minusCart(value.id)}>Minus</Button>
                            <TextField
                                id="outlined-disabled"
                                label="Count"
                                type="number"
                                value={value.cart.count}
                                variant="outlined"
                            />
                            <Button variant="contained" onClick={addCart(value.id)}>Add</Button>
                        </div>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={value.itemMst?.image}
                    />
                </Card>
            );
        })
    }

    return (
        <div className={classes.root}>
            <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleShoppingCartOpen}
                color="inherit"
            >
                <Badge badgeContent={shoppingCartItemList.length} color="secondary">
                    <ShoppingCartIcon />
                </ Badge>
            </IconButton>
            <Popover
                className={classes.cartPopover}
                anchorEl={shoppingCartAnchorEl}
                open={isMenuOpen}
                onClose={handleShoppingCartClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                >
                {cartPopover}
            </Popover>
        </div>
    )
}

export default ShoppingCart;
