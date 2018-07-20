      {/*<table id="cart-table" className='ui structured large table'>
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
      </table>*/}







    cart.map((product, index) => (
      <div className="ui grid row cart-row" key={product.id}>
        <div className="four wide column image-div">
          <Link to={`/products/${product.id}`}>
            <img className="in-cart-product-image" src="https://images.reverb.com/image/upload/s--E8z-Spvm--/a_exif,c_thumb,f_jpg,fl_progressive,g_south,h_226,q_auto:eco,w_226/v1531944161/mwfsjtzjruqblf6n5wbq.jpg" alt="title"/>
          </Link>
        </div>
        <div className="eight wide column">
          <p className="cart-item-paragraph">{product.title}</p>
          <p className="cart-item-paragraph">Seller: A seller</p>
          <p className="cart-item-paragraph">Ships from: A place</p>
          <ul>
            <li>
              <a onClick={() => removeProductFromCart(index)}>Remove</a>
            </li>
          </ul>
        </div>
        <div className="four wide column price-column">
          <p>${product.price}</p>
        </div>
      </div>
    ));