import React from 'react';

type propsShowNumber = {
    newNumber:number
}

export const Counter = (props:propsShowNumber) => {

    return (
        <div className="App">
            {props.newNumber}
        </div>
    );
}