import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import SimilarProducts from '../../components/SimilarProducts'

const product = ({params}) => {
    const product = {
        id:2,
        title:'ddcds',
        description:'lorem19afhkafdhkadhkjdshalkhdsa',
        url:'https://picsum.photos/id/20',
        price:1999
      }
  return (
    <MainLayout>
        <div className="max-w-[1200px] mx-auto">
            <div className='flex px-4 py-10'>
                {product?.url 
                    ?<img className="w-[40%]" src={product.url+'/280'}/>
                    :<div className="w-[40%]"></div>
                }
                <div className="px-4 w-full">
                    <div className="font-bold text-xl">
                        {product?.title}
                    </div>
                    <div className="pt-2 text-gray-700 text-sm">
                        {product?.description}
                    </div>
                    <div >
                        ${product?.price && (product?.price/100).toFixed(2)}
                    </div>
                    <div className="font-bold">
                        Condition <span className="text-gray-600 font-">new</span> 
                    </div>
                </div>

            </div>
        </div>
        <SimilarProducts />
    </MainLayout>
  )
}

export default product