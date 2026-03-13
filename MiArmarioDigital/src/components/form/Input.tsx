import React from 'react';

interface InputProps {
  tipo: string;
  nombreInput: string;
  texto: string;
  ph: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

export const Input = ({ tipo, nombreInput, texto, ph, onChange }: InputProps) => {
  return (
    <>
      <div className="input-style">
        <label htmlFor={nombreInput}>{nombreInput}</label>
        <input 
          type={tipo} 
          name={nombreInput} 
          id={nombreInput} 
          placeholder={ph}
          value={texto}       
          onChange={onChange} 
        />
      </div>
    </>
  )
}