import React from 'react';
import style from './../App.module.css'

type propsShowNumber = {
    newNumber: number
    error: string | null
    valueMaxInput: number
}

export const Counter = (props: propsShowNumber) => {
    const classes1 = props.newNumber === props.valueMaxInput ? style.errorMessage : '';
    const classes2 = '';

    return (
        <h1>
            {props.error ?
                <div className={style.errorMessage}>{props.error}</div> :
                <div
                    className={`${classes1} ${classes2}`}>{props.newNumber}</div>}
        </h1>
    );
}