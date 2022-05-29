import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Counter} from "./components/Сounter";
import {Input} from "./components/Input";

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

        <div>
            <Counter newNumber={newNumber}/>
            <Button name={'Ins'}
                    callBack={counterNumber}
                    callBackDisabled={disabledIns}
            />
            <Button name={'Reset'}
                    callBack={counterReset}
                    callBackDisabled={disabledReset}
            />
            <Input/>
            <Input/>
        </div>
    );
}


