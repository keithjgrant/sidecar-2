import HeaderBar from './HeaderBar';
import './PageLayout.scss';

export default props => {
  return (
    <div className="fill-wrapper">
      <HeaderBar route={props.route} />
      {props.children}
    </div>
  );
};
