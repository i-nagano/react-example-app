import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import Header from '../components/Header';
import Title from '../components/Title';
import TaskItem from '../components/TaskItem';
import { FormControl, TextField, List } from '@material-ui/core';
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";

const TodoPage = (props) => {
    const [tasks, setTasks] = useState([{ id: '', title: '', body: '' }]);
    const [inputTitle, setInputTitle] = useState('');
    const [inputBody, setInputBody] = useState('');
    useEffect(() => {
        const unSub = db.collection('tasks').onSnapshot((snapshot) => {
            setTasks(
                snapshot.docs.map((doc) => ({ id: doc.data().id, title: doc.data().title, body: doc.data().body }))
            );
        });
        return () => unSub();
    }, []);

    const newTask = () => {
        db.collection('tasks').add({ title: inputTitle, body: inputBody });
        setInputBody('');
        setInputTitle('');
    };

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
                    value={inputTitle}
                    onChange={(e) => setInputTitle(e.target.value)}
                />
            </FormControl>
            <button disabled={!inputTitle} onClick={newTask}>
                <AddToPhotosIcon />
            </button>

            <List>
                {tasks.map((task) =>
                    <div key = {task.id}>
                        <h3>{task.title}</h3>
                        <p><span>{task.id}</span><span>{task.body}</span></p>
                    </div>
                )}
                {/* <TaskItem key={task.id} id={task.id} title={task.title} body={task.body} /> */}
                <TaskItem />
            </List>
        </div>
    )
}

export default TodoPage;
