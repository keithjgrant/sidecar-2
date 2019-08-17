import {useContext} from 'react';
import Link from 'next/link';
import {withRouter} from 'next/router';
import Markdown from 'react-markdown';
import Context from '../src/AppContext';
import '../src/styles.scss';
// import shaking from '../content/techniques/shaking.md';

export default withRouter(({ router }) => {
  const store = useContext(Context);
  const technique = router.query.technique;

  if (!technique) {
    return (
      <div>
        <h1>Techniques</h1>
      </div>
    );
  }

  return (
    <Markdown source="../content/techniques/shaking.md" />
  );
});
