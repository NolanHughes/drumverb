import React from 'react'
import '../css/Cart.css'

const CartSumTable = ({cart}) => {
	const total = sum(cart, "price")
	return(
	<table id='sum-table'>
		<tbody>
			<tr>
				<td id="total-label">Total</td>
				<td className="align-right total">
					${total}.00<span className="price-currency"> USD</span>
				</td>
			</tr>
		</tbody>
	</table>
	)
}

export default CartSumTable

function sum(cart, prop) {
  var total = 0
  for ( var i = 0, _len = cart.length; i < _len; i++ ) {
    total += cart[i][prop]
  }
  return total
}