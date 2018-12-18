import Link from 'next/link';
import LogoSvg from './LogoSvg';

export default function Logo({route}) {
  let H;
  if (route === '/') {
    H = 'h1';
  } else {
    H = 'div';
  }

  return (
    <H className="logo">
      <Link href="/">
        <a>
          <LogoSvg />
          Sidecar
        </a>
      </Link>
    </H>
  );
}
