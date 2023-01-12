import React from 'react';
import Main from '../../components/landing/main';
import InformativeSection from '../../components/landing/informativeSection';
import FAQSection from '../../components/landing/faqSection';
import Footer from '../../components/landing/footer';
import Divider from '../../components/general/divider';
import './styles.scss';

const Landing = () => {
  return (
    <section className='landing'>
      <Main />
      <Divider />
      <InformativeSection
        title='Disfruta en tu TV.'
        description='Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.'
        img='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'
      />
      <Divider />
      <InformativeSection
        title='Descarga tus series para verlas offline.'
        description='Guarda tu contenido favorito y ten siempre algo para ver.'
        img='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'
        position='left'
      />
      <Divider />
      <InformativeSection
        title='Disfruta donde quieras.'
        description='Películas y series ilimitadas en tu teléfono, tablet, computadora y TV sin costo extra.'
        img='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png'
      />
      <Divider />
      <InformativeSection
        title='Crea perfiles para niños.'
        description='Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, sin costo con tu membresía.'
        img='https://occ-0-1595-3934.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABeLa_an51Ptz6LMzNXnM9oDvlKl4yIJQKZJRJ9fVFPpPFK5toVuo-KytXEdqPI64KCph1OKms7nLxtCsXm_CARaR50wx.png?r=8ec'
        position='left'
      />
      <Divider />
      <FAQSection />
      <Divider />
      <Footer />
    </section>
  );
};

export default Landing;
