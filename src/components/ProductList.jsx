import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/actions/productActions';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { productList } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      {productList.map((item) => (
        <ProductCard key={item.id} />
      ))}
    </div>
  );
};

export default ProductList;
