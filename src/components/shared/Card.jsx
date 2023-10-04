import PropTypes from 'prop-types'
function Card({children}) {
  return (
    <div className='Card'>
      {children}
    </div>
  )
}
Card.defaultProps = {
  color: 'white',
}
Card.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Card
