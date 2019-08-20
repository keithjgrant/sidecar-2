import { useContext } from 'react';
import Context from '../src/AppContext';
import TagsList from '../src/components/TagsList';

export default () => {
  const store = useContext(Context);
  // TODO filter by active tags

  return (
    <main className="main-wrapper">
      <h1 className="page-heading">Tags</h1>
      <TagsList tags={store.getTags()} />
    </main>
  );
};
