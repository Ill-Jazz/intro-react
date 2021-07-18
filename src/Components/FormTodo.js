import React, {useRef} from "react";
import Input from "./Input";
import Submit from "./Submit";
import {v4 as uuidv4} from 'uuid' // using a library to generate id's

function FormTodo ({duties, setDuties}) {
const inputRef = useRef()
    function ClickHandler () { //access the reference value
const inputElement = inputRef.current// updating the reference value
const arrDuties = JSON.parse(JSON.stringify(duties))
        arrDuties.push({name: inputElement.value, checked:false, id: uuidv4()})
        setDuties(arrDuties)
    }
    return(

            <div className="FormTodo">
                <form>
                    <Input ref = {inputRef} />
                    <Submit click = {ClickHandler}/>
                </form>
            </div>
)
}

export default FormTodo;