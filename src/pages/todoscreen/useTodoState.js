import { useState } from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default initialValue => {
    const [todos, setTodos] = useState(initialValue);

    return {
        todos,
        addTodo: todoText => {
            setTodos([...todos, todoText]);
        },
        deleteTodo: todoIndex => {
            const newTodos = todos.filter((_, index) => index !== todoIndex);
            setTodos(newTodos);
        },
        importTodo: todoArray => {
            for (let i = 0; i < todoArray.length; i++) {
                setTodos([...todos, todoArray[i]]);
                todos[i] = todoArray[i];
            }
        }
    };

};