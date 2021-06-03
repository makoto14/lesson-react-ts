import { Paper, makeStyles, Button } from "@material-ui/core";

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
    }
}));

// クラス
const UseStyleSample = () => {

    const classes = useStyles();

    return (
        <div className={classes.outer}>
            <Paper className={classes.inner}>
                <Button color="primary">Material ui button</Button>
                <Button variant="contained">ボタンだよ</Button>
            </Paper>
        </div>
    );
};

export default UseStyleSample;
