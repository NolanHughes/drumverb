import React from 'react'

import '../css/NewProduct.css'

const SellProductSidebar = () => {
	return(
  	<div className="five wide column right-side-sell-column">
      <h3>The lowest fees around</h3>
      <ul>
        <li><i className="check icon"></i>3.5% selling fee.</li>
        <li><i className="check icon"></i>2.7% + $0.25 payment processing fee. </li>
        <li><i className="check icon"></i>$0.50 min and a $350 max selling fee.</li>
      </ul>
    </div>
	)
}

export default SellProductSidebar