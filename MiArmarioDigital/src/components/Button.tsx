interface ButtonProps {
    nombre: string
    onClick?: () => void
    class: string
}

export const Button = ({ nombre, onClick, class: className }: ButtonProps) => {
    return (
        <button onClick={onClick} className={className}>
            {nombre}
        </button>
    )
}
