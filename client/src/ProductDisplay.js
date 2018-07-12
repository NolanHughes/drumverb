import React from 'react';

export default function ProductDisplay(props) {
  const { product } = props;
  
  function UserGreeting() {
    return <h1>Please search for your desired drum!</h1>;
  }

  if (product === undefined || product.length === 0) {
    return <UserGreeting />;      
  } else {
    return (
      <table className='ui selectable structured large table'>
        <thead>
          <tr>
            <th colSpan='4'>
              <h3>Cart</h3>
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
          <tr onClick={() => props.onProductClick(product)}>
            <td>{product.title}</td>
            <td className='right aligned'>{product.description}</td>
            <td className='right aligned'>{product.image}</td>
            <td className='right aligned'>${product.price}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
