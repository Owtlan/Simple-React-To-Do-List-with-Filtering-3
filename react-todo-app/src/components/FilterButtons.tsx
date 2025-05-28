import type { Filter } from "../types/Todo";

interface Props {
    currentFilter: Filter
    onChange: (filter: Filter) => void
}


export default function FilterButtons({ currentFilter, onChange }: Props) {
    return (
        <div style={{ marginTop: '1rem' }}>
            {['all', 'active', 'completed'].map(f => (
                <button key={f}
                    onClick={() => onChange(f as Filter)}
                    style={{
                        fontWeight: currentFilter === f ? 'bold' : 'normal',
                        marginRight: '0.5rem'
                    }}
                >
                    {f}
                </button>
            ))}
        </div>
    )
}