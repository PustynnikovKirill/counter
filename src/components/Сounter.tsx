import React from 'react';

type propsShowNumber = {
    newNumber:number
}

export const Counter = (props:propsShowNumber) => {

    return (
        <h1>
            {props.newNumber}
        </h1>
    );
}