1. Make FilteredProductsPage, ProductsPage, and SearchedProductsPage into one.

2. I don't need rack-cors? (Already deleted but we'll see once deployed)
3. Refactor more
4. Make searching go into category array
5. Make default filtered_by be drums and percussion || tail end of url depending on url (now it's always defaulting to drums and percussion)
6.* Could make searchbar not allow you to search with nothing entered
7. Have cart this post to api (Have to add users to this)
8. Add Edit component
9. Styling
	-require image upload width of 620px
	-Have dropdown searchbar have a default list
	-Have background color overlay for pop ups
	-Maybe fix navbar changing size? when the intro component is present vs not. Different screen size makes this happen so it's hard to debug.


	form
		display: flex;

	button 
		border: 1px rgb(209, 209, 209) solid;
		border-left: 0;