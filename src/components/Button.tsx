import React from 'react';
import style from './../App.module.css'

export type ButtonType = {
    name: string
    disabled?: boolean
    callBack: () => void
}
export const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <div>
            <button disabled={props.disabled} onClick={onClickHandler} className={style.button} >{props.name}</button>
        </div>
    );
}