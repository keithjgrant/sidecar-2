import React from 'react';
import DrinkTile from './DrinkTile';
import './TileRow.scss';

export default function TileRow({ drinks, heading }) {
  return (
  <div className="tile-group">
      <div className="tile-group__heading">{heading}</div>
      <div className="tile-row">
        {drinks.map(drink => (
          <DrinkTile key={drink.basename} drink={drink} />
        ))}
      </div>
    </div>
  );
}
