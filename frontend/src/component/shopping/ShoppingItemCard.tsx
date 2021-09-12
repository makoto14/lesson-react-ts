import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ShoppingItemType, ShoppingCartItemType } from '../../type/ShoppingCartItemType';
import { useDispatch } from 'react-redux';
import { addCartStore } from '../../store/shoppingStore';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    media: {
        height: 140,
    },
});

export function ShoppingItemCard(props: any) {
    const shoppingItem: ShoppingItemType = props.item;
    const classes = useStyles();

    const dispatch = useDispatch();

    const addCart = (id: number) => () =>  {
        const item: ShoppingCartItemType = {
            id: id
        }
        dispatch(addCartStore(item))
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={shoppingItem.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {shoppingItem.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {shoppingItem.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={addCart(shoppingItem.id)}>
                    Add Cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default ShoppingItemCard;
