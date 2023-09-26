import React from 'react'
import MainLayout from '../layouts/MainLayout'
import SimilarProducts from '../components/SimilarProducts'
import CartItem from '../components/CartItem'

const cart = () => {
    const product = 
        {
          id:1,
          title:'hk',
          description:'lordgjglsdjgajhgdsjkgem19',
          url:'https://picsum.photos/id/7',
          price:2500
        }
  return (
    <>
    <MainLayout>
     <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px] ">
      <div className="text-2xl font-bold my-4">Shopping Cart</div>
      <div className="relative flex 
      items-baseline justify-between gap-2">
        <div className="w-[65%]">
            <CartItem key={product.id} product={product} />
        </div>
        <div className="md:w-[33%] absolute top-0 right-0 m-2">
          <div className="bg-white p-4 border">
            <button className=" rounded-full bg-blue-600 text-white w-full py-4">
              Check Out
            </button>
            <div className="flex items-center mt-4 justify-between text-sm mb-1">
               <div>item (3)</div>
               <div>$12.66</div>
            </div>
            <div className="flex items-center mb-4 justify-between text-sm">
               <div>shipping</div>
               <div>free</div>
            </div>
            <div className="border-b border-gray-300"/>
            <div className="flex items-center justify-between text-lg mt-4">
              <div>subtotal</div>
              <div>$12.66</div>
            </div>
          </div>
        </div>

      </div>
     </div>
    <SimilarProducts />
    </MainLayout>
    </>
  )
}

export default cart