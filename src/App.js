import React from 'react';
import ProductName from './Component/ProductName';
import ProductPrice from './Component/ProductPrice';
import ProductDescription from './Component/ProductDescription';
import ProductImage from './Component/ProductImage';

const App = () => {
  return (
    <div>
      <h1>Product Details</h1>
      <ProductName />
      <ProductPrice />
      <ProductDescription />
      <ProductImage />
    </div>
  );
};

export default App;