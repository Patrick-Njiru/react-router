import PropTypes from 'prop-types'
import Product from '../components/Product'

const Products = ({products}) => (
  <div className='row justify-content-around g-5 my-5'>
    <h1 className="text-primary text-center">AVAILABLE PRODUCTS</h1>
    {products.map(item => <Product key={item.id} {...item} /> )}
  </div>
)

Products.propTypes = { products : PropTypes.array.isRequired }

export default Products