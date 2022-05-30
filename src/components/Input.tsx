import React from 'react';
import style from './../App.module.css';
import {ChangeEvent} from "react";

export type InputType = {
    setValueInput:(title:string)=>void
    inputValue:string
}
export const Input = (props: InputType) => {



    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setValueInput(event.currentTarget.value)
    }
    return (
        <div>
            <input type='number' value={props.inputValue} onChange={onChangeHandler} className={style.input}/>
        </div>
    );
}