import {useContext} from 'react';
import Link from 'next/link';
import Context from '../AppContext';

export default function DrinkList() {
  const store = useContext(Context);
  const {drinks} = store;

  return (
    <div>
      {drinks &&
        drinks.map(drink => (
          <Link
            key={drink.basename}
            as={`/drinks/${drink.basename}`}
            href={`/drinks?d=${drink.basename}`}
          >
            <a>{drink.title}</a>
          </Link>
        ))}
    </div>
  );
}
