import React from 'react';
import style from './../App.module.css';
import {ChangeEvent} from "react";

export type InputType = {
    setValueInput:(event: ChangeEvent<HTMLInputElement>)=>void
    inputValue:number
}
export const Input = (props: InputType) => {


    return (
        <div>
            <input type='number' value={props.inputValue}
                   onChange={props.setValueInput}
                   className={style.input}/>
        </div>
    );
}