import { useContext } from 'react';
import Context from '../src/AppContext';
import DrinkCard from '../src/components/drink-card/DrinkCard';
import DrinkList from '../src/components/DrinkList';

export default function Drinks() {
  const store = useContext(Context);
  const currentDrink = store.getCurrentDrink();
  // console.log(params);

  return currentDrink ? (
    <div className="centered-wrapper">
      <DrinkCard drink={currentDrink} />
    </div>
  ) : (
    <div className="main-wrapper">
      <h1 className="page-heading">All Drinks</h1>
      <DrinkList drinks={store.drinks} />
    </div>
  );
}

// export async function getStaticProps(context) {
//   console.log('params: ', context.params);
//   return {
//     props: {
//       foo: 'oh my',
//       // params: context.params
//     },
//   };
// }
