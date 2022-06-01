import React from 'react';
import style from './../App.module.css'

export type ButtonType = {
    name: string
    callBack: () => void
    disabled?: boolean
}
export const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <div>
            <button onClick={onClickHandler} disabled={props.disabled} className={style.button} >{props.name}</button>
        </div>
    );
}