import {useContext} from 'react';
import Link from 'next/link';
import Context from '../src/AppContext';
import '../src/styles.scss';

export default () => {
  const value = useContext(Context);

  return (
    <div className="main-wrapper">
      <h1 className="page-heading">Sidecar</h1>
    </div>
  );
};
