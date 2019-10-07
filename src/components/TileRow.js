import React from 'react';
import DrinkTile from './DrinkTile';
import './TileRow.scss';

const CLASSNAMES = {
  '1': 'drink-tile--single',
  '2': 'drink-tile--double',
  '3': 'drink-tile--triple',
};

export default function TileRow({ drinks, heading }) {
  const className = CLASSNAMES[drinks.length];
  return (
    <>
      <div className="tile-group__heading">{heading}</div>
      {drinks.map(drink => (
        <DrinkTile key={drink.basename} drink={drink} className={className} />
      ))}
    </>
  );
}
