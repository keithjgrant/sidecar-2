import React from 'react';
import Link from 'next/link';
import CocktailImage from '../CocktailImage';
import './DrinkTile.scss';

export default function DrinkTile({ drink, className }) {
  return (
    <Link href={`/drinks/${drink.basename}`}>
      <a className={`drink-tile ${className}`}>
        <CocktailImage drink={drink} className="drink-tile__image" />
        <div className="drink-tile__title">{drink.title}</div>
      </a>
    </Link>
  );
}
