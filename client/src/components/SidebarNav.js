import React from 'react'
import { Link } from 'react-router-dom'

import '../css/SidebarNav.css'

const SidebarNav = ({products}) => {
	const snares = products.filter(products => products.category === "Snare drum")
	// debugger
	return(
		<nav id="sidebar-nav">
			<div id="sidebar-categories">
				<div id="categories-heading">Categories</div>
				<ul>
					<li>
						<Link to={'/'}>
							<span>Drums and Percussion </span>
							<div className="category-count">({products.length})</div>
						</Link>
						<ul id="nested-ul">
							<li>
								<Link to={`/filtered-products/snare%20drum`}>
									<span>Snare drums </span>
									<div className="category-count">({snares.length})</div>
								</Link>
							</li>
						</ul>
					</li>
					
				</ul>
			</div>
		</nav>
	)
}

export default SidebarNav