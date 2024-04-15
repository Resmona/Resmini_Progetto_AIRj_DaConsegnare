import React from 'react';
import './About.css'
import logo from "../../immagine_missione.jpg";

const About = () => {
  return (
    <div id="about" className='wrapper'>
        <img src={logo} alt="Company Logo" className="logo" width={"500px"} height={"500px"} />
      
      <p style={{color: 'white'}}>------------------------------------------------</p>
      <h1>La missione di AIRj è semplice: offrire agli appassionati di basket, dai giocatori amatoriali ai professionisti, una selezione ineguagliabile di scarpe da basket che combinano performance di alto livello, stile innovativo e comfort assoluto. Ogni paio di scarpe nella nostra collezione è selezionato con cura per assicurare che ogni giocatore possa trovare il compagno perfetto per il proprio viaggio cestistico.</h1>
    </div>
  );
}

export default About;