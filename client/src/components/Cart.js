import React from 'react';
import '../css/Cart.css'

const Cart = ({ cart, onProductClick }) => {
  const productRows = cart.map((product, idx) => (
    <tr key={idx}>
      <td>{product.title}</td>
      <td className='right aligned'>{product.description}</td>     
      <td className='right aligned'>{product.image}</td>
      <td className='right aligned' id="item-price">${product.price}</td>
      <button onClick={() => onProductClick(idx)}>X</button>
    </tr>
  ));

  return (
    <div className="ui container">

      <table id="cart-table" className='ui structured large table'>
        <thead>
          <tr>
            <th colSpan='5'>
              <h3>Cart</h3>
            </th>
          </tr>
          <tr>
            <th className='eight wide'>Title</th>
            <th className='two wide'>Description</th>
            <th className='four wide'>Image</th>
            <th className='two wide right aligned' id="cart-label-price">Price</th>
          </tr>
        </thead>
        <tbody>
          {productRows}
        </tbody>
        <tfoot>
          <tr id="total">
            <td>Total</td>
            <td className='right aligned' id='blank'></td>
            <td className='right aligned' id='blank'></td>
            <td className='right aligned' id='cart-price'> ${sum(cart, 'price')} </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Cart

function sum(products, prop) {
  return products.reduce((memo, product) => (
    parseInt(product[prop], 10) + memo
  ), 0.0).toFixed(2);
}
