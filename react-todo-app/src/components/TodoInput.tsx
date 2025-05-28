import { useState } from "react"


interface Props {
    onAdd: (text: string) => void
}


export default function TodoInput({ onAdd }: Props) {
    const [text, setText] = useState('')


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (text.trim()) {
            onAdd(text)
            setText('')
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                placeholder="Enter a task"
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>

    )

}