import PropTypes from 'prop-types'
function Button() {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`btn-1 btn-1-${version}`}
    >
      {children}
    </button>
  )
}
Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false,
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
}
export default Button
