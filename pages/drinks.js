import { useContext } from 'react';
import Context from '../src/AppContext';
import DrinkCard from '../src/components/DrinkCard';
import DrinkList from '../src/components/DrinkList';

export default function Drinks() {
  const store = useContext(Context);
  const currentDrink = store.getCurrentDrink();

  return (
    <div className="centered-wrapper">
      {currentDrink ? (
        <DrinkCard drink={currentDrink} />
      ) : (
        <DrinkList drinks={store.drinks} />
      )}
    </div>
  );
}
