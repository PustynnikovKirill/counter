import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button} from "./components/Button";
import {Counter} from "./components/Сounter";
import {Input} from "./components/Input";
import style from './App.module.css'

export const App = () => {


    let [newNumber, setNewNumber] = useState(0)
    let [valueMaxInput, setMaxInput] = useState(0)
    let [valueStartInput, setStartInput] = useState(0)
    let [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (valueStartInput === valueMaxInput) {
            setError('Error')
        }
    },[valueStartInput])

    const counterButtonSet = () => {
        setNewNumber(valueStartInput)
    }

    const ButtonInsHandler = () => {
            setNewNumber(newNumber + 1)
    }
    const ButtonResetHandler = () => {
        setNewNumber(0)
        setError (null)
    }

    const onChangeMaxHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if (+event.currentTarget.value >= valueStartInput) {
            setMaxInput(Number(event.currentTarget.value))
        } else  {
            setError('Error')
        }
    }
    const onChangeStartHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if (+event.currentTarget.value <= valueMaxInput && +event.currentTarget.value > 0) {
            setStartInput(Number(event.currentTarget.value))
        } else {
            setError('Error')
        }
    }


    return (
        <div className={style.app}>
            <div className={style.counter}>
                <div className={style.value}>
                    <div className={style.containerInput}>
                        <div className={style.inputName}>
                            <h3>{"max value:"}</h3><Input setValueInput={onChangeMaxHandler}
                                                          inputValue={valueMaxInput}
                                                          error = {error}

                        />
                        </div>
                        <div className={style.inputName}>
                            <h3>{"start value:"}</h3><Input setValueInput={onChangeStartHandler}
                                                            inputValue={valueStartInput}
                                                            error = {error}
                        />
                        </div>
                    </div>
                    <div className={style.buttonSet}>
                        <Button name={'SET'}
                                callBack={counterButtonSet}
                                disabled={valueStartInput>=valueMaxInput ? true:false}
                        />
                    </div>
                </div>
                <div className={style.count}>
                    <div className={style.counterNumber}>
                        <Counter newNumber={newNumber}
                                 error={error}
                                 valueMaxInput={valueMaxInput}/>
                    </div>
                    <div className={style.containerButton}>
                        <Button name={'INS'}
                                callBack={ButtonInsHandler}
                                disabled={newNumber === valueMaxInput ? true : false}

                        />
                        <Button name={'RESET'}
                                callBack={ButtonResetHandler}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}


