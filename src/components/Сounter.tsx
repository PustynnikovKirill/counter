import React from 'react';
import style from './../App.module.css'

type propsShowNumber = {
    newNumber: number
    error: string | null
    valueMaxInput: number
}

export const Counter = (props: propsShowNumber) => {

    return (
        <h1>
            {props.error ?
                <div className={style.errorMessage}>{props.error}</div> :
                <div className={props.newNumber===props.valueMaxInput ? style.errorMessage:''}>{props.newNumber}</div>}
        </h1>
    );
}