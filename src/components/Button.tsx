import React from 'react';
import style from './../App.module.css'

export type ButtonType = {
    name: string
    callBack: () => void
    callBackDisabled: () => void
}
export const Button = (props: ButtonType) => {

    const onClickIns = () => {
        props.callBack()
    }
    const disabledButton = ()=>{
        props.callBackDisabled()
    }
    return (
        <div>
            <button onClick={onClickIns} className={style.button} disabled={disabledButton}>{props.name}</button>
        </div>
    );
}