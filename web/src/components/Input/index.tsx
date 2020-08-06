import React, { InputHTMLAttributes } from 'react';
import './style.css';

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

/*COMPONENTES COM PROPRIEDADES TIPADAS:
React.FC => React.FunctionComponent
inputProps => Propriedades do componente
*/

const Input: React.FC<inputProps> = ({ label, name, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </div>
  )
}

export default Input;