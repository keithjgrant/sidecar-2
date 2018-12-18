import React from 'react';
import Head from 'next/head';
import Markdown from 'react-markdown';
import {formatDate} from '../util';

function IngredientList({items = []}) {
  return (
    <ul className="ingredients">
      {items.map((ingredient, i) => (
        <li key={i} className="p-ingredient">
          {ingredient}
        </li>
      ))}
    </ul>
  );
}

function CocktailPhoto({image}) {
  if (!image) {
    return null;
  }

  return (
    <div className="drink-card__image">
      <img
        src={`/static${image.url}`}
        alt={image.alt}
        style={{objectPosition: image.align}}
      />
    </div>
  );
}

export default function DrinkCard({drink}) {
  return (
    <div className="card-wrapper">
      <div className="drink-card h-recipe">
        <Head>
          <title key="title">{drink.title}</title>
        </Head>
        <CocktailPhoto image={drink.image} />
        <div className="drink-card__content">
          <h1 className="drink-card__title p-name">{drink.title}</h1>
          {drink.intro ? (
            <div className="recipe-intro p-summary">
              <Markdown source={drink.intro} />
            </div>
          ) : null}
          <IngredientList items={drink.ingredients} />
          <div className="e-instructions">
            <Markdown source={drink.content} />
          </div>
          <div className="text-right aside">
            <time className="dt-published">
              Published {formatDate(drink.date)}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
}
