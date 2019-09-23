import Link from 'next/link';
import CocktailImage from './CocktailImage';

function DrinkItem({ drink }) {
  return (
    <li className="drink-preview">
      <Link
        key={drink.basename}
        as={`/drinks/${drink.basename}`}
        href={`/drinks?d=${drink.basename}`}
      >
        <a>
          <CocktailImage
            image={drink.image}
            glassType={drink.glass}
            className="drink-thumbnail"
          />
          <div className="drink-preview__title">{drink.title}</div>
        </a>
      </Link>
    </li>
  );
}

export default function DrinkList({ drinks }) {
  // TODO: sort alphabetically/date-added switch (and other options?)
  return (
    <ul className="drink-list">
      {drinks.map(d => (
        <DrinkItem key={d.basename} drink={d} />
      ))}
    </ul>
  );
}
