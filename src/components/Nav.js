import Link from 'next/link';

export default function Nav({route}) {
  if (route === '/') {
    return null;
  }
  return (
    <nav className="nav-bar">
      <Link href="/drinks">
        <a>Drinks</a>
      </Link>
      <Link href="/explore">
        <a>Explore</a>
      </Link>
      <Link href="/ingredients">
        <a>Ingredients</a>
      </Link>
      <Link href="/techniques">
        <a>Techniques</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
}
