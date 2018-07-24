import React from 'react'
import '../css/Cart.css'

const CartSumTable = ({cart}) => {
	const total = cart.sum("price")
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

Array.prototype.sum = function (prop) {
  var total = 0
  for ( var i = 0, _len = this.length; i < _len; i++ ) {
    total += this[i][prop]
  }
  return total
}