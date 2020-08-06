import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './style.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
          <img src="https://avatars2.githubusercontent.com/u/63956850?s=460&u=96dcd152ff4caea77ab8eb01757d1015b4943b3d&v=4" alt="Luís Henrique"/>
          <div>
              <strong>Luís Henrique</strong>
              <span>Xadrez</span>
          </div>
      </header>
      <p>
          Entusiasta do esporte da mente mais antigo e popular de todos os tempos
          <br /><br />
          Apaixonado por Xadrez desde a infância, ja ajudou milhares de 
          pessoas a conhecerem esse nobre esporte. Com uma carreira de 
          sucesso, foi campeão municipal por equipes nos jogos da primavera
          de 1996.
      </p>
      <footer>
          <p>
              Preço/hora 
              <strong>R$ 80,00</strong>
          </p>
          <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
          </button>
      </footer>
    </article>
  )
}

export default TeacherItem;