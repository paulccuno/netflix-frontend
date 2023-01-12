import React from 'react';
import EmailForm from '../emailForm';
import Collapse, { CollapseGroup } from '../../general/collapse';
import questions from './questions.json';
import './styles.scss';

const FAQSection = () => {
  return (
    <article className='faq-section'>
      <h1 className='title'>Preguntas frecuentes</h1>
      <br />
      <br />
      <Collapse
        title='¿Qué es Netflix?'
        description={`
      Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet.
      \nTodo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!
      `}
      />
      <Collapse
        title='¿Cuánto cuesta Netflix?'
        description='Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde $ 16.900 hasta $ 38.900 al mes. Sin costos adicionales ni contratos.'
      />
      <br />
      <CollapseGroup items={questions} />
      <br />
      <br />
      <EmailForm />
    </article>
  );
};

export default FAQSection;
