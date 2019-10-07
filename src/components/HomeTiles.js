import React, { useContext } from 'react';
import Link from 'next/link';
import Context from '../AppContext';
import TileRow from './TileRow';
import './HomeTiles.scss';

function dateSort(a, b) {
  const first = new Date(a.date);
  const second = new Date(b.date);
  if (first > second) {
    return -1;
  }
  if (second > first) {
    return 1;
  }
  return 0;
}

export default function HomeTiles() {
  const store = useContext(Context);
  const featured = store.drinks.filter(d => d.featured).slice(0, 3);
  const latest = store.drinks.sort(dateSort).slice(0, 3);

  return (
    <div className="home-tiles">
      <Link href="/drinks">
        <a className="home-tile home-tile--main">Drinks</a>
      </Link>
      <Link href="/tags">
        <a className="home-tile">Tags</a>
      </Link>
      <Link href="/about">
        <a className="home-tile home-tile--about">About</a>
      </Link>
      <TileRow drinks={featured} heading="Featured" />
      <TileRow drinks={latest} heading="Recently added" />
    </div>
  );
}
