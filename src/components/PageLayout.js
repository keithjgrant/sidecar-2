import HeaderBar from './HeaderBar';

export default props => {
  return (
    <div>
      <HeaderBar route={props.route} />
      {props.children}
    </div>
  );
};
