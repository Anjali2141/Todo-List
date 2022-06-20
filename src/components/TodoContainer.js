import React, { useEffect, useState } from 'react'
import { Items } from "./Items.js";
import { AddItems } from './AddItems';
import './Home.css'



export const TodoContainer = () => {



    let items;
    if (localStorage.getItem("todoList") === null) {
        items = [];
    }
    else {
        items = JSON.parse(localStorage.getItem("todoList"));
    }

    const [todoList, setTodoList] = useState(items);
    // {
    //     id: 1,
    //     title: "Important work",
    //     description: "get the work done by 12 pm"
    // },
    // {
    //     id: 2,
    //     title: "color list",
    //     description: "collect all possible colors"
    // }

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }, [todoList])


    const removeTodo = (todo) => {
        console.log("Delete an item", todo);

        setTodoList(todoList.filter((item => {
            return todo !== item;
        }

        )))
        localStorage.setItem("todoList", JSON.stringify(todoList));

    }
    const addTodo = (title, description) => {
        console.log("adding", title, description, "to the list");
        let id;
        if (todoList.length === 0) {
            id = 0;

        }
        else {
            id = todoList[todoList.length - 1].id + 1;

        }

        const newTodo = {
            id: id,
            title: title,
            description: description,
        }

        setTodoList([...todoList, newTodo]);
        console.log(newTodo);
    }



    return (
        <div>
            <AddItems onAdd={addTodo} />
            <h2>Todos</h2>
            <div className='listItems'>
                {todoList.length === 0 ? <div className='todoDisplay'>No Todo is there!!!</div> :
                    todoList.map((element) => {
                        return (
                            <>
                                <Items todo={element} key={element.id} onDelete={() => removeTodo(element)} />
                            </>

                        )
                    })
                }

            </div>
        </div>
    )
}
