import React, { useState } from 'react';
import firebase from 'firebase/app';
import { ListItem, TextField, Grid } from '@material-ui/core';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { db } from '../firebase';

const TaskItem = (props) => {
    const [title, setTitle] = useState(props.title);
    const editTitle =() => {
        db.collection('tasks').doc(props.id).set({title: title}, {merge: true});
    };
    const deleteTask = () => {
        db.collection('tasks').doc(props.id).delete();
    };

    return (
        <div>
            <ListItem>
                <h2>{props.title}</h2>
                <Grid container justify="center">
                    <TextField
                    InputLabelProps={{
                        shrink:true
                    }}
                    label="Edit to Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                    <button onClick={editTitle}>
                        <EditOutlinedIcon />
                    </button>
                    <button onClick={deleteTask} >
                        <DeleteOutlineOutlinedIcon />
                    </button>
                </Grid>
            </ListItem>
        </div>
    )
}

export default TaskItem;
