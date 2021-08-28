import React from 'react';

const Title = (props) => {
    return (
        <div>
            <h2>
                <span>{props.titleWeather}</span>
                <span>{props.titleNews}</span>
                <span>{props.titleTop}</span>
            </h2>
        </div>
    );
}

export default Title;
