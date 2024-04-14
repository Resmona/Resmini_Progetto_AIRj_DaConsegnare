// components/Home.js
import React from 'react';
import articles from "../../article.json";
import articles2 from "../../article2.json";
import articles3 from "../../article3.json";
import './Home.css'
import Article from '../../common/Article/Article';

const Home = () => {
  const funzioneClick = () => {
    console.log('Hello!')
  }
  
  return (
    <div id="home" className='wrapper'>
      <p>Hai appena fatto il primo passo nel tempio dedicato a chi vive e respira basket a 360 gradi. AIRj non è solo un negozio: è un viaggio attraverso la passione, il dinamismo e la pura adrenalina del gioco, trasformato in stile. Qui, ogni scarpa da basket non è semplicemente parte del tuo outfit; è un'estensione del tuo gioco, un compagno in ogni salto, in ogni sprint e in ogni atterraggio.</p>
      <p>Non fermarti al primo passo. Esplora la nostra collezione e trova la scarpa che eleverà il tuo gioco a nuovi vertici. E quando toccherai il parquet con le tue nuove alleate ai piedi, sentirai la differenza: ogni azione più decisa, ogni salto più alto, ogni movimento più fluido.</p>
      <h1>Prodotti più venduti</h1>
      <section className='section-one'>
        <div className="left-section">
        {articles.map(article => (
          <Article
            key={article.id}
            article={article}
            click={funzioneClick}
          />
        ))}
        </div>
      </section>

      <h1>Prodotti più popolari</h1>
      <section className='section-one'>
        <div className="left-section">
        {articles2.map(article => (
          <Article
            key={article.id}
            article={article}
            click={funzioneClick}
          />
        ))}
        </div>
      </section>

      <h1>Prodotti scontati</h1>
      <section className='section-one'>
        <div className="left-section">
        {articles3.map(article => (
          <Article
            key={article.id}
            article={article}
            click={funzioneClick}
          />
        ))}
        </div>
      </section>
    </div>
  );
}

export default Home;