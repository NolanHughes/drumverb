import React from 'react';

export default function ProductDisplay(props) {
  const { product } = props;
  
  function UserGreeting() {
    return <h1>Please search for your desired drum!</h1>;
  }

  if (product === undefined || product.length == 0) {
    return <UserGreeting />;      
  } else {
    return (
      <table className='ui selectable structured large table'>
        <tbody>
          <tr>
            <td>{product.title}</td>
            <td className='right aligned'>{product.description}</td>     
            <td className='right aligned'>{product.placeholder}</td>
            <td className='right aligned'>{product.image}</td>
            <td className='right aligned'>${product.price}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
