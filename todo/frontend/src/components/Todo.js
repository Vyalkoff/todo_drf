import React from "react";


const TodoItem = ({todo}) => {
    return (
        <tr>
            <td>{todo.project}</td>
            <td>{todo.text}</td>
            <td>{todo.user}</td>
            <td>{String(todo.is_active)}</td>
        </tr>
    )
}

const TodoList = ({todos}) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Project </th>
                    <th>Text</th>
                    <th> Authors </th>
                    <th> Status</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo) => < TodoItem todo={todo} />)}
            </tbody>
        </table>
    )
}
export default TodoList