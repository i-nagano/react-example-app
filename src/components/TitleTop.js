import React from 'react';

const TitleTop = (props) => {
    return (
        <div>
            <h2>Todo App by React/Firestore</h2>
            <h2>
                <span>{props.titleWeather}</span>
                <span>{props.titleNews}</span>
                <span>{props.titleTop}</span>
            </h2>
        </div>
    )
}

export default TitleTop;
