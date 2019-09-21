import React from 'react';
import About from '../content/about.md';

export default function AboutPage () {
  return (
    <main className="main-wrapper">
      <article className="fullpage-article">
        <About />
      </article>
    </main>
  );
}
