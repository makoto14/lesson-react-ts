import React from 'react';
import { Paper, makeStyles, Button } from "@material-ui/core";
import CircularIndeterminate from './loader';
import { useSelector, useDispatch } from "react-redux";
import { getGeneration, changeGeneration } from "../store/generation";
import { getSearch, changeSearch } from "../store/searchStore";

// スタイルの記述をする
const useStyles = makeStyles(theme => ({
    outer: {
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.background.default,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    inner: {
        width: "720px",
        minHeight: "420px",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },

    message: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: "16px",
    },

    buttonArea: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "16px",
    },
}));

const MainCard = () => {

    const classes = useStyles();
    const [message, setMessage] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(true);
    let generation: number = useSelector(getGeneration);
    let search: String = useSelector(getSearch);
    const dispatch = useDispatch();

    const addCount = (): void => {
        dispatch(changeGeneration(generation += 1));
        dispatch(changeSearch('add'));
        setIsLoading(true);
        reRequst();
    }

    const minusCount = (): void => {
        dispatch(changeGeneration(generation += -1));
        dispatch(changeSearch('minus'));
    }

    const reRequst = (): void => {
        fetch(`/api`)
            .then(res => res.json())
            .then(data => setMessage(data.message))
            .then(() => setIsLoading(false));
    }

    React.useEffect(() => {
        reRequst();
    }, [])

    return (
        <div className={classes.outer}>
            <Paper className={classes.inner}>
                <div className={classes.message}>
                    <div className={classes.message}>{isLoading ? <CircularIndeterminate></CircularIndeterminate> : message}</div>
                    <div className={classes.message}>Click count : {generation}</div>
                    <div className={classes.message}>Search input : {search}</div>
                </div>
                <div className={classes.buttonArea}>
                    <Button color="primary" onClick={minusCount}>Minus</Button>
                    <Button variant="contained" onClick={addCount}>Add</Button>
                </div>
            </Paper>
        </div>
    );
};

export default MainCard;
