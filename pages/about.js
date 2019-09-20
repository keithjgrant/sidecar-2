import React from 'react';
import Markdown from 'react-markdown';
import content from '../content/about.md';

console.log(content);
export default function About () {
  return (
    <main className="main-wrapper">
      <h1 className="page-heading">About</h1>
      <Markdown source={content}/>
    </main>
  );
}
