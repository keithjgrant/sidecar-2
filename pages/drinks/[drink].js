import { useContext } from 'react';
import fs from 'fs';
import path from 'path';
import Context from '../../src/AppContext';
import DrinkCard from '../../src/components/drink-card/DrinkCard';
// import drinksData from '../../static/data/drinks.json';

export default function Drinks({ drink }) {
  const store = useContext(Context);
  const currentDrink = store.drinks.find(d => d.basename === drink);

  return (
    <div className="centered-wrapper">
      <DrinkCard drink={currentDrink} />
    </div>
  );
}

export async function getStaticProps(context) {
  return { props: { drink: context.params.drink } };
}

export async function getStaticPaths() {
  const dataFile = path.join(process.cwd(), 'static', 'data', 'drinks.json');
  const contents = fs.readFileSync(dataFile, 'utf8');
  const drinksData = JSON.parse(contents);
  return {
    paths: Object.keys(drinksData).map(d => `/drinks/${d}`),
    // TODO: add fallback page in case data not built?
    fallback: false,
  };
}
