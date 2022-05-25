import React, { useState, useEffect } from 'react';
import './App.css';
import user from '../images/user.png';

const LOCAL_STORAGE_PRODUCT_KEY = 'products_react';
const LOCAL_STORAGE_CART_KEY = 'cart';

function getStorageValue(key, defaultValue) {
  // getting stored value
  const saved = localStorage.getItem(key);
  const initial = saved ? JSON.parse(saved) : [];
  return initial || defaultValue;
}

function initialProductsSetup() {
  const productsStr = localStorage.getItem(LOCAL_STORAGE_PRODUCT_KEY);
  const products = productsStr ? JSON.parse(productsStr) : [];
  const cartProductsStr = localStorage.getItem(LOCAL_STORAGE_CART_KEY);
  const cartProductsNames = (
    cartProductsStr ? JSON.parse(cartProductsStr) : []
  ).map((cp) => cp.name);
  const finalProducts = products.filter(
    (p) => !cartProductsNames.includes(p.name)
  );
  localStorage.setItem(
    LOCAL_STORAGE_PRODUCT_KEY,
    JSON.stringify(finalProducts)
  );
}

function App() {
  initialProductsSetup();

  const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
      return getStorageValue(key, defaultValue);
    });

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
  };

  const [products, setProducts] = useLocalStorage(
    LOCAL_STORAGE_PRODUCT_KEY,
    []
  );
  const [carts, setCart] = useLocalStorage(LOCAL_STORAGE_CART_KEY, []);

  const addProductHandler = (product) => {
    setCart([...carts, product]);

    const newProductList = products.filter((productSelected) => {
      return product !== productSelected;
    });

    setProducts(newProductList);
  };

  const removeProductHandler = (cart) => {
    const newContactList = carts.filter((cartSelected) => {
      return cart !== cartSelected;
    });

    setCart(newContactList);
    setProducts([...products, cart]);
  };

  const renderProductsList = products.map((product) => {
    return (
      <div className="item">
        <img className="ui avatar image" src={user} alt="user" />
        <div className="content">
          <div className="header">{product.name}</div>
        </div>
        <i
          className="plus circle icon"
          style={{ color: 'green', marginTop: '7px' }}
          onClick={() => addProductHandler(product)}
        ></i>
      </div>
    );
  });

  const renderCartList = carts.map((cart, index) => {
    return (
      <div key={index} className="item">
        <img className="ui avatar image" src={user} alt="user" />
        <div className="content">
          <div className="header">{cart.name}</div>
        </div>
        <i
          className="trash alternate outline icon"
          style={{ color: 'red', marginTop: '7px' }}
          onClick={() => removeProductHandler(cart)}
        ></i>
      </div>
    );
  });
  return (
    <div className="ui main">
      <div className="welcome">
        <h3>Products</h3>

        <div className="ui celled list">{renderProductsList}</div>
      </div>

      <div className="welcome">
        <h3>Cart</h3>
        <div className="ui celled list">{renderCartList}</div>
      </div>
    </div>
  );
}

export default App;
