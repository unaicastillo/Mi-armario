interface ButtonProps {
  nombre: string;
  class: string; 
  tipo?: "button" | "submit" | "reset";
}

// 2. Lo recibimos en los parámetros y se lo pasamos al <button> HTML
export const Button = ({ nombre, class: clasePersonalizada, tipo = "button" }: ButtonProps) => {
  return (
    <button className={clasePersonalizada} type={tipo}>
      {nombre}
    </button>
  );
};