import React from 'react';
import TileLink from './components/TileLink';
import './IndexWrapper.scss';
import './TechniquesIndex.scss';

export default function TechniquesIndex() {
  return (
    <main className="index-wrapper index-content">
      <h1 className="page-heading">Techniques</h1>
      <h2 className="section-heading">
        Essential skills for making cocktails.
      </h2>
      <ul className="technique-tiles">
        <li>
          <TileLink
            href="/techniques/building"
            imageUrl="/images/drinks/pilots-license.jpg"
            imagePosition="50% 40%"
          >
            Building
          </TileLink>
        </li>
        <li>
          <TileLink
            href="/techniques/shaking"
            imageUrl="/images/drinks/angel-city-fizz.jpg"
            imagePosition="50% 40%"
          >
            Shaking
          </TileLink>
        </li>
        <li>
          <TileLink
            href="/techniques/stirring"
            imageUrl="/images/drinks/pilots-license.jpg"
            imagePosition="50% 70%"
          >
            Stirring
          </TileLink>
        </li>
        <li>
          <TileLink href="/techniques/straining">Straining</TileLink>
        </li>
        <li>
          <TileLink href="/techniques/twist">Adding a Twist</TileLink>
        </li>
      </ul>
      <h2 className="section-heading">Families of cocktails</h2>
      <ul className="technique-tiles technique-tiles--stacked">
        <li>
          <TileLink href="/techniques/sour">Sour</TileLink>
        </li>
        {/* <li>
          <TileLink href="/techniques/modified-sour">Modified Sour</TileLink>
        </li>
        <li>
          <TileLink href="/techniques/old-fashioned">Old Fashioned</TileLink>
        </li>
        <li>
          <TileLink href="/techniques/martini">Martini</TileLink>
        </li>
        <li>
          <TileLink href="/techniques/highball">Highball</TileLink>
        </li>
        <li>
          <TileLink href="/techniques/flip">Flip</TileLink>
        </li> */}
      </ul>
    </main>
  );
}
