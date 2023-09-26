import React from 'react'
import Link from 'next/link'
import Product from "./Product"
import { BiLoader } from 'react-icons/bi'
interface SimilarProductProps{
    product:any
}
const SimilarProducts: React.FC<SimilarProductProps> = ({product}) => {
    const products = [
        {
          id:1,
          title:'hk',
          description:'lordgjglsdjgajhgdsjkgem19',
          url:'https://picsum.photos/id/7',
          price:2500
        },
        {
          id:2,
          title:'ddcds',
          description:'lorem19afhkafdhkadhkjdshalkhdsa',
          url:'https://picsum.photos/id/20',
          price:1999
        },
        {
            id:3,
            title:'ddcds',
            description:'lorem19afhkafdhkadhkjdshalkhdsa',
            url:'https://picsum.photos/id/20',
            price:1999
          },
          {
            id:4,
            title:'ddcds',
            description:'lorem19afhkafdhkadhkjdshalkhdsa',
            url:'https://picsum.photos/id/20',
            price:1999
          },
          {
            id:5,
            title:'ddcds',
            description:'lorem19afhkafdhkadhkjdshalkhdsa',
            url:'https://picsum.photos/id/20',
            price:1999
          },
        
      ]
  return (
    <>
    <div>
        <div className="border-b py-1 max-w-[1200px] mx-auto" />

        <div className="max-w-[1200px] mx-auto">
            <div className="font-bold text-2xl py-2 mt-4">Similar sponsored items</div>

            {products.length > 0 ?
              <div className="grid grid-cols-5 gap-4">
                {products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
              </div>
            : <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center gap-4 font-semibold">
                      <BiLoader size={30} className="text-blue-400 animate-spin"/>
                      Loading Products...
                  </div>
              </div>}
        </div>
    </div>
</>
  )
}

export default SimilarProducts

