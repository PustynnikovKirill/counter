import React from 'react';
import style from './../App.module.css';

export type InputType = {

}
export const Input = (props: InputType) => {

    return (
        <div>
            <input type='number' className={style.input}/>
        </div>
    );
}