const sortProductsByPrice = (sortBy, data) => {
  let tempData = [...data];
  if (sortBy === "high-to-low") {
    tempData.sort((a, b) => b.discountedPrice - a.discountedPrice);
  }
  if (sortBy === "low-to-high") {
    tempData.sort((a, b) => a.discountedPrice - b.discountedPrice);
  }
  return tempData;
};

const filterProducts = (state, data) => {
  let tempData = [...data];

  tempData = tempData.filter(item => item.rating >= state.rating);

  if (!state.includeOutOfStock) {
    tempData = tempData.filter(product => product.inStock);
  }

  if (state.category.length > 0) {
    tempData = tempData.filter(product => state.category.includes(product.category));
  }

  if (state.range) {
    tempData = tempData.filter(
      product => state.range.min <= product.price && product.price <= state.range.max
    );
  }
  return tempData;
};

const minMaxReducer = (acc, current) => {
  if (current.price > acc.max) {
    return {
      ...acc,
      max: current.price
    };
  } else if (acc.min > current.price) {
    return {
      ...acc,
      min: current.price
    };
  } else {
    return acc;
  }
};

export {
  sortProductsByPrice,
  filterProducts,
  minMaxReducer
};