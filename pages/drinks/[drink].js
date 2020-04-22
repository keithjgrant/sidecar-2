import { useContext } from 'react';
import { useRouter } from 'next/router';
import Context from '../../src/AppContext';
import DrinkCard from '../../src/components/drink-card/DrinkCard';
import drinksData from '../../static/data/drinks.json';

export default function Drinks({ drink }) {
  // const router = useRouter();
  // const { drink } = router.query;
  // console.log(router.query);
  const store = useContext(Context);
  const currentDrink = store.drinks.find(d => d.basename === drink);
  // console.log(params);

  return (
    <div className="centered-wrapper">
      <DrinkCard drink={currentDrink} />
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      drink: context.params.drink,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(drinksData).map(d => `/drinks/${d}`),
    // TODO: add fallback page in case data not built?
    fallback: false,
  };
}
