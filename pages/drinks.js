import {useContext} from 'react';
import Link from 'next/link';
import Context from '../src/AppContext';

export default () => {
  const store = useContext(Context);
  const {drinks} = store;
  const currentDrink = store.getCurrentDrink();

  return (
    <div>
      <h1>Sidecar</h1>
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
      {currentDrink ? <div>Current: {currentDrink.title}</div> : null}
    </div>
  );
};
