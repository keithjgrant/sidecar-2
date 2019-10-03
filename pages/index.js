import {useContext} from 'react';
import HomeTiles from '../src/components/HomeTiles';
import Context from '../src/AppContext';
import '../src/styles.scss';

export default () => {
  const value = useContext(Context);

  return (
    <HomeTiles />
  );
};
