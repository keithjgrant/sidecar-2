import React, { useState } from 'react';
import Link from 'next/link';

const LIMIT = 3;

export default function TagsList({ tags }) {
  const [isExpanded, setIsExpanded] = useState(false);
  let shownTags;
  let toggle;
  if (isExpanded || tags.length >= LIMIT) {
    shownTags = tags;
  } else {
    shownTags = tags.splice(0, LIMIT);
    toggle = (
      <li>
        <button onClick={() => setIsExpanded(true)}>
          {tags.length - LIMIT} more
        </button>
      </li>
    );
  }

  return (
    <ul className="tags-list">
      {shownTags.map(tag => (
        <li key={tag}>
          <Link as={`/tags/${tag}`} href={`/tags/${tag}`}>
            <a>{tag}</a>
          </Link>
        </li>
      ))}
      {toggle}
    </ul>
  );
}
