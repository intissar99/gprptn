import { React, useEffect, useState } from 'react';
import Reclamation from "./Reclamation"
import axios from "axios";

function Products() {
  const [Products, setProducts] = useState([]);

  const fetchProducts = () => {
    const res = axios.get("http://localhost:3000/fetchProducts").then((res) => {
      setProducts(res.data);
    });
  };
  //useffect : only render when the user open the page where the function is used  
  useEffect(() => {
    fetchProducts();
  });
  return (
    <div>
      <div>
        <div container spacing={3}>
          {Products.map((product) => (
            <div item xs={12} sm={6} md={4}>
              <div >
                <div>
                  <img
                    alt=''
                    image={product.picture}
                    title="Contemplative Reptile"
                  />
                  <div>
                    <h2>
                      {product.name}
                    </h2>
                    <p>
                      {product.description}
                    </p>
                  </div>
                </div>
                <div >
                  <div>
                    <Reclamation productId={product._id} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products