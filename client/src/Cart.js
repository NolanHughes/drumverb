import React from 'react';

export default function Cart(props) {
  const { cart } = props;

  const productRows = cart.map((product, idx) => (
    <tr key={idx} onClick={() => props.onProductClick(idx)}>
      <td>{product.title}</td>
      <td className='right aligned'>{product.description}</td>     
      <td className='right aligned'>{product.placeholder}</td>
      <td className='right aligned'>{product.image}</td>
      <td className='right aligned'>${product.price}</td>
    </tr>
  ));

  return (
    <table className='ui selectable structured large table'>
      <thead>
        <tr>
          <th colSpan='5'>
            <h3>Cart</h3>
          </th>
        </tr>
        <tr>
          <th className='eight wide'>Title</th>
          <th className='two wide'>Description</th>
          <th className='two wide'>Placeholder</th>
          <th className='two wide'>Image</th>
          <th className='four wide'>Price</th>
        </tr>
      </thead>
      <tbody>
        {productRows}
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <th className='right aligned' id='blank'></th>
          <th className='right aligned' id='blank'></th>
          <th className='right aligned' id='blank'></th>
          <th className='right aligned' id='total-price'> ${sum(cart, 'price')} </th>
        </tr>
      </tfoot>
    </table>
  );
}

function sum(products, prop) {
  return products.reduce((memo, product) => (
    parseInt(product[prop], 10) + memo
  ), 0.0).toFixed(2);
}
