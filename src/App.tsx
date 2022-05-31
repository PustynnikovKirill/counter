import React, {ChangeEvent, useState} from 'react';
import {Button} from "./components/Button";
import {Counter} from "./components/Сounter";
import {Input} from "./components/Input";
import style from './App.module.css'

export const App = () => {


    let [newNumber, setNewNumber] = useState(0)
    let [valueMaxInput, setMaxInput] = useState(0)
    let [valueStartInput, setStartInput] = useState(0)

    const counterButtonSet = () => {

    }

    const counterButtonIns = () => {
        if (newNumber < valueMaxInput) {
            setNewNumber(newNumber + 1)
        }
    }
    const counterButtonReset = () => {
        setNewNumber(0)
    }

    const setMaxInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if(Number(event.currentTarget.value) >= valueStartInput) {
            setMaxInput(Number(event.currentTarget.value))
        }
    }
    const setStartInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if(+event.currentTarget.value <= valueMaxInput) {
            setStartInput(Number(event.currentTarget.value))
        }
    }

    return (
        <div className={style.app}>
            <div className={style.counter}>
                <div className={style.value}>
                    <div className={style.containerInput}>
                        <div className={style.inputName}>
                            <h3>{"max value:"}</h3><Input setValueInput={setMaxInputHandler} inputValue={valueMaxInput}/>
                        </div>
                        <div className={style.inputName}>
                            <h3>{"start value:"}</h3><Input setValueInput={setStartInputHandler} inputValue={valueStartInput}/>
                        </div>
                    </div>
                    <div className={style.buttonSet}>
                        <Button name={'SET'}
                                callBack={counterButtonSet}
                        />
                    </div>
                </div>
                <div className={style.count}>
                    <div className={style.counterNumber}>
                        <Counter newNumber={newNumber}/>
                    </div>
                    <div className={style.containerButton}>
                        <Button name={'INS'}
                                callBack={counterButtonIns}
                                disabled={newNumber === valueMaxInput ? true : false}

                        />
                        <Button name={'RESET'}
                                callBack={counterButtonReset}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}


