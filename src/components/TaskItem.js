import React, { useState } from 'react';
import { ListItem, TextField, Grid } from '@material-ui/core';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { db } from '../firebase';

const TaskItem = (props) => {
    const [title, setTitle] = useState(props.title);
    const editTitle = () => {
        db.collection('tasks').doc(props.id).set({ title: title }, { merge: true });
    };
    const [body, setBody] = useState(props.body);
    const editBody = () => {
        db.collection('tasks').doc(props.id).set({ body: body }, { merge: true });
    };
    const deleteTask = () => {
        db.collection('tasks').doc(props.id).delete();
    };

    return (
        <div>
            <ListItem>
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={2}>
                    <TextField
                    fullWidth
                    InputLabelProps={{
                        shrink:true
                    }}
                    label="Edit Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onBlur={editTitle}
                    />
                    </Grid>
                    {/* <button onClick={editTitle}>
                        <EditOutlinedIcon />
                    </button> */}
                    <Grid item xs={4}>
                    <TextField
                    fullWidth
                    InputLabelProps={{
                        shrink:true
                    }}
                    label="Edit Comment"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    onBlur={editBody}
                    />
                    </Grid>
                    {/* <button onClick={editBody}>
                        <EditOutlinedIcon />
                    </button> */}
                    <button onClick={deleteTask} >
                        <DeleteOutlineOutlinedIcon />
                    </button>
                </Grid>
            </ListItem>
        </div>
    )
}

export default TaskItem;
