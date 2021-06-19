import React from 'react';
import { Paper, makeStyles, Button } from "@material-ui/core";
import CircularIndeterminate from './loader';

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
}));

const MainCard = () => {

    const classes = useStyles();
    const [message, setMessage] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(true);
    const [hoge, setHoge] = React.useState('');
    let [clickCount, setCount] = React.useState(0);

    const addCount = (): void => {
        setHoge("hoge");
        setCount(clickCount += 1);
        setIsLoading(true);
        reRequst();
    }

    const minusCount = (): void => {
        setHoge("");
        setCount(clickCount += -1);
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
                <Button color="primary" onClick={minusCount}>Minus</Button>
                <Button variant="contained" onClick={addCount}>Add</Button>
                <div className={classes.message}>
                    <div className={classes.message}>{isLoading ? <CircularIndeterminate></CircularIndeterminate> : message}</div>
                    <div className={classes.message}>{hoge}</div>
                    <div className={classes.message}>Click count : {clickCount}</div>
                </div>
            </Paper>
        </div>
    );
};

export default MainCard;
