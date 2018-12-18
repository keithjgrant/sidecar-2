import Logo from './Logo';
import Nav from './Nav';

export default function HeaderBar({route}) {
  if (route === '/') {
    return null;
  }

  return (
    <header className="header-bar">
      <Logo />
      <Nav route={route} />
    </header>
  );
}
