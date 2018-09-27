export function setSearchValue(query) {
  const value = query.target.value
  return{
    type: 'SET_SEARCH_VALUE',
    value
  }
}

export function clearSearchValue() { 
  return {
    type: 'CLEAR_SEARCH_VALUE'  
  };
}

export function clearQueriedProducts() {
  return {
    type: 'CLEAR_QUERIED_PRODUCTS'  
  };
}
