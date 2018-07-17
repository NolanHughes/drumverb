import React from 'react';

export default function ProductIndexDisplay(props) {
  const { products, onProductClick } = props;

  const productRows = products.map((product, idx) => (
    <tr key={idx} onClick={() => onProductClick(product)}> 
      <td>{product.title}</td>
      <td className='right aligned'>{product.description}</td>
      <td className='right aligned'>{product.image}</td>
      <td className='right aligned'>${product.price}</td>
    </tr>
  ));
  
  return (
    <table className='ui selectable structured large table'>
      <thead>
        <tr>
          <th colSpan='4'>
            <h3>Products</h3>
          </th>
        </tr>
        <tr>
          <th className='eight wide'>Title</th>
          <th className='two wide'>Description</th>
          <th className='four wide'>Image</th>
          <th className='two wide right aligned'>Price</th>
        </tr>
      </thead>
      <tbody>
        {productRows}
      </tbody>
    </table>
  );
}
