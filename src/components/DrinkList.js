import React from 'react';
import Link from 'next/link';
import CocktailImage from './CocktailImage';

function DrinkItem({ drink }) {
  return (
    <li>
      <Link
        key={drink.basename}
        as={`/drinks/${drink.basename}`}
        href={`/drinks?d=${drink.basename}`}
      >
        <a className="drink-preview">
          <CocktailImage drink={drink} className="drink-thumbnail" />
          <div className="drink-preview__content">{drink.title}</div>
        </a>
      </Link>
    </li>
  );
}

function alphaSort(a, b) {
  const titleA = a.title.toLowerCase();
  const titleB = b.title.toLowerCase();
  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }
  return 0;
}

export default function DrinkList({ drinks }) {
  // TODO: sort alphabetically/date-added switch (and other options?)
  const sortedDrinks = drinks.sort(alphaSort);
  return (
    <ul className="drink-list">
      {sortedDrinks.map(d => (
        <DrinkItem key={d.basename} drink={d} />
      ))}
    </ul>
  );
}
