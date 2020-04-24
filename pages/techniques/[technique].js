import React from 'react';
// import { withRouter } from 'next/router';
import '../../src/styles.scss';
import TechniquesIndex from '../../src/TechniquesIndex';
import Building from '../../content/techniques/building.md';
import Shaking from '../../content/techniques/shaking.md';
import Stirring from '../../content/techniques/stirring.md';
import Straining from '../../content/techniques/straining.md';
import Twist from '../../content/techniques/twist.md';
import Sour from '../../content/techniques/sour.md';

const contentComponents = {
  building: Building,
  shaking: Shaking,
  stirring: Stirring,
  straining: Straining,
  twist: Twist,
  sour: Sour,
};

export default function Technique({ technique }) {
  const Content = contentComponents[technique];

  if (!technique || !Content) {
    return <TechniquesIndex />;
  }

  return (
    <main className="main-wrapper">
      <article className="fullpage-article">
        <Content />
      </article>
    </main>
  );
}

export async function getStaticProps(context) {
  return { props: { technique: context.params.technique } };
}

export async function getStaticPaths() {
  const pages = Object.keys(contentComponents);
  return {
    paths: pages.map(page => `/techniques/${page}`),
    fallback: false,
  };
}
