import React from 'react';
import TileLink from './components/TileLink';
import './IndexWrapper.scss';
import './TechniquesIndex.scss';

export default function IngredientsIndex() {
  return (
    <main className="index-wrapper index-content">
      <h1 className="page-heading">Ingredients</h1>
      <h2 className="section-heading">Spirits</h2>
      <ul className="technique-tiles">
        <li>
          <TileLink href="/ingredients/vermouth">Vermouth</TileLink>
        </li>
        <li>
          <TileLink href="/ingredients/gin">Gin</TileLink>
        </li>
      </ul>
      <h2 className="section-heading">Syrups & mixers</h2>
      <ul className="technique-tiles">
        <li>
          <TileLink href="/ingredients/simple-syrup">Simple Syrup</TileLink>
        </li>
        <li>
          <TileLink href="/ingredients/burnt-sugar-syrup">
            Burnt Sugar Syrup
          </TileLink>
        </li>
        <li>
          <TileLink href="/ingredients/butter-syrup">Butter Syrup</TileLink>
        </li>
      </ul>
    </main>
  );
}
