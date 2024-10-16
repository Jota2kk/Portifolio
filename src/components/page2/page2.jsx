import './page2.css';
import { useEffect, useState } from 'react';

export const Page2 = () => {
  const [showScrollAlert, setShowScrollAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollAlert(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="page2" id="pag2">
      <div className="texts">
        <h1>Olá, bem-vindo</h1>
        <p>Eu sou João Vitor</p>
        <a>
          Iniciei na área da programação a dois anos como um pequeno hobbie,
          aprendendo a desenvolver pequenos algoritmos para realizar pequenas
          tarefas no meu dia a dia... Desde então, me aprofundei na área e me
          encontrei como um dev full-stack web.
        </a>
        <button><a href="#pag4">Contatos</a></button>

        {showScrollAlert && (
          <div className="scroll-alert">
            <div className="arrow"></div>
          </div>
        )}
      </div>
    </section>
  );
};
