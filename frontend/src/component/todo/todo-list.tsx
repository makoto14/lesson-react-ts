import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { TodoType } from '../../type/TodoType';
import { useDispatch } from 'react-redux';
import { doneTodo, deleteTodo } from '../../store/todoStore';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            // maxWidth: '600px',
            backgroundColor: theme.palette.background.paper,
        },
    }),
);

export default function CheckboxList(props: any) {
    const todos: Array<TodoType> = props.todos;
    const classes = useStyles();

    const dispatch = useDispatch();

    const handleToggle = (value: string) => () => {
        dispatch(doneTodo(value));
    };

    const del = (value: string) => () => {
        dispatch(deleteTodo(value));
    }

    return (
        <List className={classes.root}>
            {todos.map((value) => {
                const labelId = `checkbox-list-label-${value.id}`;
                const isEitable = false;
                const changeEditMode = () => !isEitable;

                return (
                    <ListItem key={value.id} role={undefined} dense button onClick={handleToggle(value.id)}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={value.isDone}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={value.name} />
                        <ListItemSecondaryAction>
                            {/* <IconButton edge="end" aria-label="comments">
                                <EditIcon />
                            </IconButton> */}
                            <IconButton edge="end" aria-label="comments" onClick={del(value.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    );
}