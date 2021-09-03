import Header from '../components/Header';
import Title from '../components/Title';
import TaskItem from '../components/TaskItem';
import { Grid, FormControl, TextField, List } from '@material-ui/core';
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";

const TodoPage = (props) => {
    return (
        <div>
            <Header />
            <Title titleTop={props.titleTop} />
            <Grid container justifyContent="center" alignItems = "center">
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
            </Grid>
            <List>
                {props.tasks.map((task) =>
                <TaskItem key={task.id} id={task.id} idNo={task.idNo} title={task.title} body={task.body} regist={task.regist} />
                )}
            </List>
        </div>
    )
}

export default TodoPage;
