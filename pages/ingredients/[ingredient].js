import React from 'react';
import { withRouter } from 'next/router';
import '../../src/styles.scss';
import IngredientsIndex from '../../src/IngredientsIndex';
import Gin from '../../content/ingredients/gin.md';
import Vermouth from '../../content/ingredients/vermouth.md';
import SimpleSyrup from '../../content/ingredients/simple-syrup.md';
import BurntSugarSyrup from '../../content/ingredients/burnt-sugar-syrup.md';
import ButterSyrup from '../../content/ingredients/butter-syrup.md';

const INGREDIENTS = {
  gin: Gin,
  vermouth: Vermouth,
  'simple-syrup': SimpleSyrup,
  'burnt-sugar-syrup': BurntSugarSyrup,
  'butter-syrup': ButterSyrup,
};

export default withRouter(({ router }) => {
  const ingredient = router.query.ingredient;
  const Content = INGREDIENTS[ingredient];

  if (!Content) {
    return <IngredientsIndex />;
  }

  return (
    <main className="main-wrapper">
      <article className="fullpage-article">
        <Content />
      </article>
    </main>
  );
});

export async function getStaticProps(context) {
  return { props: { ingredient: context.params.ingredient } };
}

export async function getStaticPaths() {
  const pages = Object.keys(INGREDIENTS);
  return {
    paths: pages.map(page => `/ingredients/${page}`),
    fallback: false,
  };
}
