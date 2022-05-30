import React, {useState} from 'react';
import {Button} from "./components/Button";
import {Counter} from "./components/Сounter";
import {Input} from "./components/Input";
import style from './App.module.css'

export const App = () => {
    let [newNumber, setNewNumber] = useState(0)
    let [valueMaxInput, setMaxInput] = useState('')
    let [valueStartInput, setStartInput] = useState('')

    const counterNumber = () => {
        setNewNumber(newNumber + 1)
    }
    const counterReset = () => {
        setNewNumber(0)
    }



    return (
        <div className={style.app}>
            <div className={style.counter}>
                <div className={style.value}>
                    <div className={style.containerInput}>
                        <div className={style.inputName}>
                            <h3>{"max value:"}</h3><Input  setValueInput={setMaxInput} inputValue={valueMaxInput}/>
                        </div>
                        <div className={style.inputName}>
                            <h3>{"start value:"}</h3><Input setValueInput={setStartInput} inputValue={valueStartInput}/>
                        </div>
                    </div>
                    <div className={style.buttonSet}>
                        <Button name={'SET'}
                                callBack={counterReset}
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

                        />
                        <Button name={'RESET'}
                                callBack={counterReset}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}


