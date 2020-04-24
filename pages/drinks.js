import { useContext } from 'react';
import Context from '../src/AppContext';
import DrinkList from '../src/components/DrinkList';

export default function Drinks() {
  const store = useContext(Context);
  return (
    <div className="main-wrapper">
      <h1 className="page-heading">All Drinks</h1>
      <DrinkList drinks={store.drinks} />
    </div>
  );
}
