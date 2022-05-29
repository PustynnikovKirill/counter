import React from 'react';
// import style from 'src/components/button.module.css'

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
            <button onClick={onClickIns} disabled={disabledButton}>{props.name}</button>
        </div>
    );
}