import React from 'react';
import Link from 'next/link';
import FeaturedCocktailCard from './FeaturedCocktailCard';
import RecentlyAddedCards from './RecentlyAddedCards';
import './HomeTiles.scss';

export default function HomeTiles() {
  return (
    <div className="home-tiles">
      <Link href="/drinks">
        <a className="home-tiles__main">Drinks</a>
      </Link>
      <Link href="/tags">
        <a>Tags</a>
      </Link>
      <FeaturedCocktailCard />
      <RecentlyAddedCards />
      <Link href="/about">
        <a className="home-tiles__about">About</a>
      </Link>
    </div>
  )
}
