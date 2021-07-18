import TodoListItem from "./TodoListItem";


function TodoList({duties, setDuties}) {

    function HandleClick (duty) {
        let newArr = JSON.parse(JSON.stringify(duties)); // converting the text into an object
        const click = newArr.find(element => element.id === duty.id); // finding the clicked element by the id
        click.checked = !click.checked;// changing the state of the checkbox
        setDuties(newArr)
    }


    return (

        <>
            <h1>Duties</h1>
            <ul>
                {duties.map((duty) => (
                        <TodoListItem handleCheck={() => HandleClick(duty)} checked={duty.checked} key={duty.id} item={duty.name}/>
                    )
                )}

            </ul>

        </>
    )
}

export default TodoList;



