import React from "react";
const TodoListItem = (props) => (
    <>
    <li>
        <input type="checkbox" onChange={props.handleCheck} defaultChecked={props.checked}/>
        {props.item}
    </li>
    </>
)

export default TodoListItem;