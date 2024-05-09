import React from "react";
import ProductItem from "./ProductItem";

function ProductContainer({products}) {
  const ProductItems= products.map((product)=>(
    <ProductItem key={product.id}
    product={product}/>
  ))
  return (
    <div id="product-collection">{ProductItems}</div>
  );
}

export default ProductContainer;