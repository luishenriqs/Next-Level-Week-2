import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
import './style.css';

/*TIPAGEM DAS PROPS:
Obs: O sinal de ? representa não obrigatoriedade dessa props*/
interface PageHeaderProps {
    title: string;
    description?: string;
}

/*COMPONENTES COM PROPRIEDADES TIPADAS:
React.FC => React.FunctionComponent
PageHeaderProps => Propriedades do componente
*/
const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to='/'>
                    <img src={backIcon} alt="Voltar"/>
                </Link>
                <img src={logoImg} alt="Proffy"/>
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
                { props.description && <p>{props.description}</p> }

                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;