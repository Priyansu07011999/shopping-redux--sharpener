import CartButton from '../Cart/CartButton';

const MainHeader = (props) => {
  return (
    <header className="w-full h-20 px-10 flex items-center justify-between bg-gray-900">
      <h1 className="text-white text-2xl">ReduxCart</h1>
      <nav>
        <ul className="flex items-center space-x-4">
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
