import React from 'react'
import '../css/Cart.css'

const CartSumTable = ({cart}) => {
	const total = sum(cart, "price")
	return(
	<table id='sum-table'>
		<tbody>
			<tr>
{/*					<td>Subtotal</td>
				<td className="align-right">
					${subtotal}.00
				</td>
			</tr>
			<tr>
			<td>Shipping</td>
				<td className="align-right">
					${shipingTotal}.00
				</td>
			</tr>
			<tr>
				<td>Sales Tax</td>
				<td className="align-right">
					${taxTotal}.00
				</td>*/}
			</tr>
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