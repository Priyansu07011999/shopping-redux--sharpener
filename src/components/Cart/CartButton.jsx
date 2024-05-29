import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className="flex items-center bg-transparent border border-cyan-500 text-cyan-500 rounded-md px-4 py-2 transition duration-300 ease-in-out hover:bg-cyan-500 hover:text-white" onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className="bg-cyan-500 rounded-full px-2 py-1 text-xs font-semibold ml-2">{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
