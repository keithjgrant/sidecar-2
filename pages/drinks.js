import {useContext} from 'react';
import Context from '../src/AppContext';
import DrinkCard from '../src/components/DrinkCard';
import DrinkList from '../src/components/DrinkList';

export default () => {
  const store = useContext(Context);
  const currentDrink = store.getCurrentDrink();

  return (
    <div>
      {currentDrink ? <DrinkCard drink={currentDrink} /> : <DrinkList />}
    </div>
  );
};
