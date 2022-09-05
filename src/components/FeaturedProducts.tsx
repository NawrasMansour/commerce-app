import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'

import Error from './Error'
import Loading from './Loading'
import Product from './Product'

const FeaturedProducts = () => {
  const{ products_loading:loading,
         products_error:error,
         featured_products: featured = []} = useProductsContext();

  if(loading){
    return <Loading />
  }

  if(error){
    return <Error />
  }

  return (
    <section className='section bg-primary-clr-grey-10'>
      <div className='title'>
        <h2 className='tracking-wide capitalize mb-7 leading-5 text-4xl font-bold'>featured products</h2>
        <div className="underline w-24 h-1 mx-auto bg-primary-clr-primary-5"></div>
      </div>
      <div className="section-center my-16 mx-auto grid gap-10 sm:grid-cols-3">
        {featured?.slice(0,3).map( (product : any)=> <Product key={product.id} {...product} />)}
      </div>

    </section>
  )
}

// const Wrapper = styled.section`
//   background: var(--clr-grey-10);
//   .featured {
//     margin: 4rem auto;
//     display: grid;
//     gap: 2.5rem;
//     img {
//       height: 225px;
//     }
//   }
//   .btn {
//     display: block;
//     width: 148px;
//     margin: 0 auto;
//     text-align: center;
//   }
//   @media (min-width: 576px) {
//     .featured {
//       grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
//     }
//   }
// `

export default FeaturedProducts
