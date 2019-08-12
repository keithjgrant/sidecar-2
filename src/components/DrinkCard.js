import React from 'react';
import Head from 'next/head';
import Markdown from 'react-markdown';
import CocktailImage from './CocktailImage';
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

export default function DrinkCard({drink}) {
  return (
    <div className="centered-wrapper">
      <main
        className={`drink-card ${
          drink.image ? '' : 'drink-card--no-image'
        } h-recipe`}
      >
        <Head>
          <title key="title">{drink.title}</title>
        </Head>
        <CocktailImage image={drink.image} glassType={drink.glass} />
        <div className="drink-card__content">
          <h1 className="card-title p-name">{drink.title}</h1>
          {drink.intro ? (
            <div className="recipe-intro p-summary">
              <Markdown source={drink.intro} />
            </div>
          ) : null}
          <IngredientList items={drink.ingredients} />
          <div className="e-instructions">
            <Markdown source={drink.content} />
          </div>
          <div className="text-right publish-date">
            <time className="dt-published">
              Published {formatDate(drink.date)}
            </time>
          </div>
        </div>
      </main>
    </div>
  );
}
