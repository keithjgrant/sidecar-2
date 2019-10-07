import Logo from './Logo';
import Nav from './Nav';
import './HeaderBar.scss';

export default function HeaderBar() {
  return (
    <header className="header-bar">
      <Logo />
      <Nav />
    </header>
  );
}
