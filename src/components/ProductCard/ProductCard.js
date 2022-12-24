import React from 'react';
import "./ProductCard.css"


export default function ProductCard ({product}) {
  return (
    <div key={product.id} className='product' title={product.title}>
      <picture className='product-img'>
        <img src="https://unsplash.it/250/200" alt="unsplash" />
      </picture>
      <div className="product-content">
        <p className="product-offer">Hemen Al Sonra Öde</p>
        <h3 className='product-title' >{product.title}</h3>
        <p className='product-description' title={product.description}>{product.description}</p>
        <p>&#11088; &#11088; &#11088; &#11088; &#11088;</p>
        <div className="product-price">{product.price} TL</div>
        <button className='button'>Add To Card</button>
      </div>
    </div>
  )
}




// export default function ProductCard ({data}) {

//   function dataShow(product) {
//     return (
//       <div key={product.id} className='product' title={product.title}>
//         <picture className='product-img'>
//           <img src="https://unsplash.it/250/200" alt="unsplash" />
//         </picture>
//         <div className="product-content">
//           <p className="product-offer">Hemen Al Sonra Öde</p>
//           <h3 className='product-title' >{product.title}</h3>
//           <p className='product-description' title={product.description}>{product.description}</p>
//           <p>&#11088; &#11088; &#11088; &#11088; &#11088;</p>
//           <div className="product-price">{product.price} TL</div>
//           <button className='button'>Add To Card</button>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <>
//       {data.map(dataShow)}
//     </>
//   )
// }

