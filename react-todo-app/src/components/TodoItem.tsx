import type { Todo } from "../types/Todo";

interface Props {
    todo: Todo
    onToggle: (id: number) => void
}


export default function TodoItem({ todo, onToggle }: Props) {

    return (
        <li onClick={() => onToggle(todo.id)}
            style={{
                cursor: 'pointer',
                textDecoration: todo.completed ? 'line-through' : 'none',
            }}
        >
            {todo.text}
        </li>
    )

}