import Header from '../components/Header';
import Title from '../components/Title';
import TaskItem from '../components/TaskItem';
import { FormControl, TextField, List } from '@material-ui/core';
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";

const TodoPage = (props) => {
    return (
        <div>
            <Header />
            <Title titleTop ={props.titleTop} />
            <FormControl>
                <TextField
                    InputLabelProps={{
                        shrink: true
                    }}
                    label="Input New Task"
                    value={props.inputTitle}
                    onChange={(e) => props.setInputTitle(e.target.value)}
                />
            </FormControl>
            <button disabled={!props.inputTitle} onClick={props.newTask}>
                <AddToPhotosIcon />
            </button>
            <List>
                {props.tasks.map((task) =>
                <TaskItem key={task.id} id={task.id} title={task.title} />
                )}
            </List>
        </div>
    )
}

export default TodoPage;
