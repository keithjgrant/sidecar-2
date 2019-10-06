import React from 'react';
import Link from 'next/link';
import CocktailImage from './CocktailImage';
import './DrinkTile.scss';

export default function DrinkTile({ drink }) {
  return (
    <Link href={`/drinks/${drink.basename}`}>
      {drink.image && false ? (
        <a className="drink-tile" style={{
          backgroundImage: `url(/static${drink.image.url})`,
          backgroundPosition: drink.image.align || '50%',
        }}>
        <div className="drink-tile__title">{drink.title}</div>
      </a>
    ) : (
      <a className="drink-tile">
        <CocktailImage drink={drink} className="drink-tile__image" />
        <div className="drink-tile__title">{drink.title}</div>
      </a>
    )}
    </Link>
  );
}
