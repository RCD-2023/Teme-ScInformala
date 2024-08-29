//import { isDisabled } from "@testing-library/user-event/dist/utils/";
import PropTypes from "prop-types";
function Button({ children, version, type }) {
  return (
    <button className={`btn btn-${version}`} type={type}>
      {children}
    </button>
  );
}
Button.defaultProps = {
  version: "primary",
  type: "button",
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
