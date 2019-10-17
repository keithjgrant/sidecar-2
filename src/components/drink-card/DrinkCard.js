import React from 'react';
import Head from 'next/head';
import Markdown from 'react-markdown';
import CocktailImage from '../CocktailImage';
import DrinkTags from './DrinkTags';
import ScaleIndicator from './ScaleIndicator';
import PrepMethod from './PrepMethod';
import GlassType from './GlassType';
import IngredientList from './IngredientList';
import { formatDate } from '../../util';
import './DrinkCard.scss';

export default function DrinkCard({ drink }) {
  return (
    <main
      className={`drink-card ${
        drink.image ? '' : 'drink-card--no-image'
      } h-recipe`}
    >
      <div className="drink-card__body">
        <Head>
          <title key="title">{drink.title}</title>
        </Head>
        <CocktailImage drink={drink} className="drink-card__image" />
        <div className="drink-card__content">
          <h1 className="card-title p-name">{drink.title}</h1>
          <DrinkTags tags={drink.tags} />
          {drink.intro ? (
            <div className="recipe-intro p-summary">
              <Markdown source={drink.intro} />
            </div>
          ) : null}
          <IngredientList items={drink.ingredients} garnish={drink.garnish} />
          <div className="e-instructions">
            <Markdown source={drink.content} />
          </div>
          <div className="text-right publish-date">
            {drink.date ? (
              <time className="dt-published">
                Published {formatDate(drink.date)}
              </time>
            ) : null}
          </div>
        </div>
      </div>
      <div className="drink-card__tabs">
        <div>
          <ScaleIndicator value={drink.sweetness} label="Sweetness" />
        </div>
        <div>
          <ScaleIndicator value={drink.booziness} label="Booziness" />
        </div>
        <div>
          <GlassType drink={drink} />
        </div>
        <div>
          <PrepMethod tags={drink.tags} />
        </div>
      </div>
    </main>
  );
}
