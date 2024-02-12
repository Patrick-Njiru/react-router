import PropTypes from 'prop-types'

const Product = ({
  title,
  image,
  price,
  category,
  description
}) => (
  <div className='card bg-secondary text-light col-6 col-sm-5 col-md-3 mx-3 shadow py-3'>
    <h4 className='card-title my-2'>{title}</h4>
    <img src={image} alt={title} className='card-image img-fluid rounded my-2' style={{maxHeight: '250px'}} />
    <h6 className='my-2'>$ {price || 'Default Price'}</h6>
    <h5 className='my-2'>{category}</h5>
    <details title='description' className='my-2'>{description}</details>
  </div>
)

Product.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.any.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Product