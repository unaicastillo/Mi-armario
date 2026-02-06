interface InputProps {
  tipo: string,
  nombreInput: string,
  texto: string
  ph: string
}

export const Input = ({ tipo, nombreInput, texto, ph }: InputProps) => {
  return (
    <>
      <div className="input-style">
        <label htmlFor={nombreInput}>{nombreInput}</label>
        <input type={tipo} name={nombreInput} id={nombreInput} placeholder={ph} />
      </div>
    </>
  )
}
