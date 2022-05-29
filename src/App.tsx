import React, {useState} from 'react';
import {Button} from "./components/Button";
import {Counter} from "./components/Сounter";
import {Input} from "./components/Input";
import style from './App.module.css'

export const App = () => {
    let [newNumber, setNewNumber] = useState(0)

    const counterNumber = () => {
        setNewNumber(newNumber + 1)
    }
    const counterReset = () => {
        setNewNumber(0)
    }
    const disabledIns = () => {

    }
    const disabledReset = () => {

    }


    return (
        <div className={style.app}>
            <div className={style.counter}>
                <div className={style.value}>
                    <div className={style.containerInput}>
                        <div className={style.inputName}>
                            <h3>{"max value:"}</h3><Input />
                        </div>
                        <div className={style.inputName}>
                            <h3>{"start value:"}</h3><Input/>
                        </div>
                    </div>
                    <div className={style.buttonSet}>
                        <Button name={'SET'}
                                callBack={counterReset}
                                callBackDisabled={disabledReset}
                        />
                    </div>
                </div>
                <div className={style.count}>
                    <div className={style.counterNumber}>
                        <Counter newNumber={newNumber}/>
                    </div>
                    <div className={style.containerButton}>
                        <Button name={'INS'}
                                callBack={counterNumber}
                                callBackDisabled={disabledIns}
                        />
                        <Button name={'RESET'}
                                callBack={counterReset}
                                callBackDisabled={disabledReset}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}


