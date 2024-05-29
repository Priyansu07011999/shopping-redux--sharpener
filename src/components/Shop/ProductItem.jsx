import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import Card from '../UI/Card';

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { title, price, description, id } = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className="mb-4">
      <Card>
        <header className="flex justify-between items-baseline">
          <h3 className="text-lg mb-2">{title}</h3>
          <div className="bg-gray-800 rounded-full px-4 py-1 text-white text-lg">${price.toFixed(2)}</div>
        </header>
        <p className="text-gray-700">{description}</p>
        <div className="flex justify-end mt-4">
          <button onClick={addToCartHandler} className="btn">Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
