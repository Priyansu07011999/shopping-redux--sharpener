import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, total, price, id } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className="m-4 bg-gray-700 p-4">
      <header className="flex justify-between items-baseline">
        <h3 className="text-2xl mb-2">{title}</h3>
        <div className="font-bold text-xl">
          ${total.toFixed(2)}{' '}
          <span className="italic text-sm">(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">x <span>{quantity}</span></div>
        <div className="flex">
          <button onClick={removeItemHandler} className="border-2 border-white px-4 py-1 rounded text-white hover:bg-gray-600">-</button>
          <button onClick={addItemHandler} className="border-2 border-white px-4 py-1 rounded text-white hover:bg-gray-600">+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
