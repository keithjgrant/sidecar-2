import { useContext } from 'react';
import fs from 'fs';
import path from 'path';
import Context from '../../src/AppContext';
import DrinkList from '../../src/components/DrinkList';

export default function Tag({ tag }) {
  const store = useContext(Context);
  const drinks = store.drinks.filter(d => d.tags.includes(tag));

  return (
    <div className="main-wrapper">
      <h1 className="page-heading">Drinks tagged {tag}</h1>
      <DrinkList drinks={drinks} />
    </div>
  );
}

export async function getStaticProps(context) {
  return { props: { tag: context.params.tag } };
}

export async function getStaticPaths() {
  const dataFile = path.join(process.cwd(), 'static', 'data', 'drinks.json');
  const contents = fs.readFileSync(dataFile, 'utf8');
  const drinksData = JSON.parse(contents);

  const tags = {};
  Object.keys(drinksData).forEach(key => {
    drinksData[key].tags.forEach(tag => {
      tags[tag] = true;
    });
  });
  return {
    paths: Object.keys(tags).map(tag => `/tags/${tag}`),
    // TODO: add fallback page in case data not built?
    fallback: false,
  };
}
