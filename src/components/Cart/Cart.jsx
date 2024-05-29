import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Card className="max-w-xs sm:max-w-md md:max-w-lg mx-auto bg-gray-800 text-white p-4">
      <h2 className="text-xl font-semibold mb-4">Your Shopping Cart</h2>
      <ul className="divide-y divide-gray-700">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
