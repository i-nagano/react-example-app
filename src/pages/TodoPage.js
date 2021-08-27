import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import Header from '../components/Header';

const TodoPage = (props) => {
    const [tasks, setTasks] = useState([{id: '', title: '', body:''}]);
    useEffect(() => {
        const unSub = db.collection('tasks').onSnapshot((snapshot) => {
            setTasks(
                snapshot.docs.map((doc) => ({ id: doc.data().id, title: doc.data().title, body: doc.data().body }))
            );
        });
        return () => unSub();
    }, []);

    return (
        <div>
            <Header />
            <h2>Todo List</h2>
            {tasks.map((task) =>
                <div>
                  <h3>{task.title}</h3>
                    <p><span>{task.id}</span><span>{task.body}</span></p>
                </div>
            )}
        </div>
    )
}

export default TodoPage;
