import React from 'react';
import Link from 'next/link';

export default function TileLink({ href, imageUrl, imagePosition, children }) {
  const style = {
    backgroundImage: imageUrl ? `url(/static${imageUrl})` : null,
    backgroundPosition: imagePosition || null,
  };
  return (
    <Link href={href}>
      <a style={style}>{children}</a>
    </Link>
  );
}
