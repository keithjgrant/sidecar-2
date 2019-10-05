import React from 'react';
import Link from 'next/link';
import CocktailImage from './CocktailImage';
import './TileRow.scss';

export default function TileRow({ drinks, heading }) {
  return (
  <div className="tile-group">
      <div className="tile-group__heading">{heading}</div>
      <div className="tile-row">
        {drinks.map(drink => (
          <Link key={drink.basename} href={`/drinks/${drink.basename}`}>
            <a className="drink-tile">
              <CocktailImage drink={drink} className="drink-tile__image" />
              <div className="drink-tile__title">{drink.title}</div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
