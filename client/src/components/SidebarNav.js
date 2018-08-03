import React from 'react'
import { Link } from 'react-router-dom'

import '../css/SidebarNav.css'

const SidebarNav = ({products}) => {

	const categoriesArray = [
		{value: "1", name: "Bass Drum"}, 
		{value: "2", name: "Full Acoustic Kits"}, 
		{value: "3", name: "Snare"},
		{value: "4", name: "Tom"},
		{value: "5", name: "Crash"},
		{value: "6", name: "Cymbal Packs"},
		{value: "7", name: "Hi-Hats"},
		{value: "8", name: "Other (Splash, China, etc)"},
		{value: "9", name: "Ride"}
	]

	// debugger

	const sidebarCategories = categoriesArray.map((category, index) => (
		<li key={index} className="sidebar-categories">
			<Link to={`/filtered-products/${category.value}`}>
				<span>{category.name} </span>
				<div className="category-count">({`${products.filter(product => product.category === category.value).length}`})</div>
			</Link>
		</li>
	))

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
							{sidebarCategories}
						</ul>
					</li>
					
				</ul>
			</div>
		</nav>
	)
}

export default SidebarNav