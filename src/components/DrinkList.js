import Link from "next/link";

function DrinkItem({ drink }) {
  return (
    <li className="drink-preview">
      <Link
        key={drink.basename}
        as={`/drinks/${drink.basename}`}
        href={`/drinks?d=${drink.basename}`}
      >
        <a>
          {drink.image ? (
            <img src={`/static${drink.image.url}`} alt={drink.image.alt} />
          ) : (
            <img src={`/static/bartender.jpg`} alt="" />
          )}
          {drink.title}
        </a>
      </Link>
    </li>
  );
}

export default function DrinkList({ drinks }) {
  return (
    <div className="centered-wrapper">
      <ul className="drink-list">
        {drinks.map(d => (
          <DrinkItem key={d.basename} drink={d} />
        ))}
      </ul>
    </div>
  );
}
