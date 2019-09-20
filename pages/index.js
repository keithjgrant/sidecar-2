import {useContext} from 'react';
import Link from 'next/link';
import Context from '../src/AppContext';
import '../src/styles.scss';

export default () => {
  const value = useContext(Context);

  return (
    <div style={{
      backgroundImage: 'url("/images/bartender.jpg")',
    }}>
      <h1>Sidecar</h1>
    </div>
  );
};
