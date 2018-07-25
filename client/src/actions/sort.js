export function setSortValue(sortValue) {
	const value = sortValue.target.value
	
  return{
    type: 'SET_SORT_VALUE',
    value
  }
}