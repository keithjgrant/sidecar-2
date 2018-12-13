import {useState, useEffect} from 'react';

export default () => {
  const [drinks, setDrinks] = useState(null);

  useEffect(async () => {
    const response = await fetch('/static/drinks.json');
    const data = await response.json();
    const drinksData = Object.keys(data).map(key => data[key]);
    setDrinks(drinksData);
  });

  return (
    <div>
      <h1>Sidecar</h1>
      {drinks && drinks.map(drink => <p key={drink.basename}>{drink.title}</p>)}
    </div>
  );
};
