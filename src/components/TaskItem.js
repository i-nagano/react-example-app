import React from 'react';
import firebase from 'firebase/app';
import { ListItem, TextField, Grid } from '@material-ui/core';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

const TaskItem = (props) => {
    return (
        <div>
            <ListItem>
                <h2>{props.title}</h2>
            </ListItem>
        </div>
    )
}

export default TaskItem;
