import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos, addTodo } from "../store/todoStore";
import { TodoType } from "../type/TodoType";
import CheckboxList from "./todo/todo-list";
import { v4 as uuidv4 } from "uuid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'center',
            margin: '24px',
        },
        todoContainer: {
            width: '600px',
            backgroundColor: theme.palette.background.paper,
        },
        newTodo: {
            display: 'flex'
        }
    }),
);

const TodoCard = () => {
    const classes = useStyles();
    const [newTodoName, setNewTodoName] = React.useState('');
    const [isInputError, setIsInputError] = React.useState(false);
    const [inputErrorMessage, setInputErrorMessage] = React.useState('');
    let todos: any = useSelector(getTodos);
    const dispatch = useDispatch();

    const add = (): void => {
        if (errorHandling()) {
            return;
        }
        const newTodo: TodoType = {
            id: uuidv4(),
            name: newTodoName,
            isDone: false
        }
        dispatch(addTodo(newTodo));
        initialTodoName();
    }

    const errorHandling = (): boolean => {
        let errorMessage = '';
        let isError = false;
        if (newTodoName === '') {
            isError = true;
            errorMessage = 'Input string is empty';
        }
        setInputErrorMessage(errorMessage);
        setIsInputError(isError)
        return isError;
    }

    const changeNewTodoName = (event: any) => {
        setNewTodoName(event.target.value);
    }

    const initialTodoName = () => {
        setNewTodoName('');
    }

    return (
        <div className={classes.root}>
            <div className={classes.todoContainer}>
                <div className={classes.newTodo}>
                    <TextField
                        id="standard-basic"
                        label="ToDo name"
                        color="primary"
                        fullWidth
                        value={newTodoName}
                        onChange={changeNewTodoName}
                        helperText={inputErrorMessage}
                        error={isInputError}
                    />
                    <Button color="primary" onClick={add}>Add</Button>
                </div>
                <CheckboxList todos={todos} />
            </div>
            {/* <div>{JSON.stringify(todos)}</div> */}
        </div>
    );
}

export default TodoCard;