import React, { useState } from 'react';
import './Article.css'

const Article = ({ article, click }) => {

  return (
    <article className='blog-article'>
      <img src={article.image} alt={article.title} className='article-img'/>
      <div className='article-header'>
      <p>{article.date}</p>
      </div>
      <h2>{article.title}</h2>
      <p>{article.intro}</p>
      <button onClick={click}>aggiungi al carrello</button>
    </article>
  );
};

export default Article;
