import './LinkButton.scss';

function LinkButton(props) {
  return (
    <a
      href={props.link}
      className="link-button"
      target={props.newTab && "_blank" || "_self"}
    >
      {props.linkText}
    </a>
  );
}

export default LinkButton;
