export const currencyFormatter = (value) => {
  return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
};

export const checkPalindrom = (str) => {
  let response = false;
  if (str && typeof str === 'string') {
    response = str.replace(/ /g,'') === str.split('').reverse().join('').replace(/ /g,'');
  }

  return response;
};

export const addDiscounts = (search, data) => {
  const isPalindrom = checkPalindrom(search);

  if (isPalindrom) {
    return data.map((products) => ({
      ...products,
      discount: '50%',
      newPrice: products.price * 0.50,
    }))
  }

  return data.slice(0, 8);
}

export const checkSearch = (products, search) => {
  return products.filter((element) => {
    const { id, brand, description } = element;
    
    if (id === Number(search)) return true;
    if (search.length >= 3) {
      if (brand.includes(search) || description.includes(search))
        return true;
    }
    return false
  });
}