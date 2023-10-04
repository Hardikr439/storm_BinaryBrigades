import PropTypes from 'prop-types'
function Card(props) {
  return (
    <div className='Card' style={{ backgroundColor: `${props.color}` }}>
      {props.children}
    </div>
  )
}
Card.defaultProps = {
  color: 'white',
}
Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}
export default Card
