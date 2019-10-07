import Link from 'next/link';
import './Nav.scss';

export default function Nav() {
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
        <a className="xs-hidden">About</a>
      </Link>
    </nav>
  );
}
