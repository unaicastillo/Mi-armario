import React from 'react'

interface ButtonProps {
    nombre: string
    onClick?: () => void
    className?: string
    width?: string
    height?: string
}

export const Button = ({ nombre, onClick, className, width, height }: ButtonProps) => {
    const clasesPredeterminadas = 'text-base font-medium text-white cursor-pointer transition-all duration-300 ease-in-out hover:opacity-90 active:scale-95 flex items-center justify-center'
    const estilosPredeterminados = { 
        backgroundColor: '#c026d3', 
        borderRadius: '5px', 
        border: 'none',
        width: width || '70px',
        height: height || '35px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const [isActive, setIsActive] = React.useState(false)

    const handleMouseDown = () => setIsActive(true)
    const handleMouseUp = () => setIsActive(false)
    const handleMouseLeave = () => setIsActive(false)

    const estilosActuales = {
        ...estilosPredeterminados,
        backgroundColor: isActive ? '#a21caf' : '#c026d3'
    }

    return (
        <div 
            onClick={onClick}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className={className || clasesPredeterminadas}
            style={!className ? estilosActuales : undefined}
        >
            {nombre}
        </div>
    )
}
