"use client"

import MainLayout from "../layouts/MainLayout"
import SimilarProducts from "../components/SimilarProducts"
import CartItem from "../components/CartItem"
import { useCart } from "../context/cart"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useUser } from "@/app/context/user";
import Link from "next/link"
import useIsLoading from "../hooks/useIsLoading"
import useUserAddress from "../hooks/useUserAddress";
import ClientOnly from "../components/ClientOnly"
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";



export default function Cart() {
  const user = useUser();
  const router = useRouter()
  const cart = useCart()
  const [addressDetails, setAddressDetails] = useState({})
  const [isLoadingAddress, setIsLoadingAddress] = useState(false)

  useEffect(() => {
    useIsLoading(true)
    cart.getCart()
    cart.cartTotal()
    useIsLoading(false)
  }, [cart])

  useEffect(() => {
    if (cart?.cartTotal() <= 0) {
      toast.error("Your cart is empty!", { autoClose: 3000 })
      return router.push('/')
    }

    useIsLoading(true)

    const getAdddress = async () => {
      if (user?.id == null || user?.id == undefined) {
        useIsLoading(false)
        return
      }

      setIsLoadingAddress(true)
      const response = await useUserAddress()
      if (response) setAddressDetails(response)
      setIsLoadingAddress(false)
    }

    getAdddress()
    useIsLoading(false)
  }, [user])


  const pay = async (event) => {
    event.preventDefault()

    if (Object.entries(addressDetails).length == 0) {
      showError('Please add shipping address!')
      return
    }


    try {
      let response = await fetch('/api/orders/create', {
        method: "POST",
        body: JSON.stringify({
          name: addressDetails.name,
          address: addressDetails.address,
          zipcode: addressDetails.zipcode,
          city: addressDetails.city,
          country: addressDetails.country,
          products: cart.getCart(),
          total: cart.cartTotal()
        })
      })

    } catch (error) {
      console.log(error)
      toast.error('Something went wrong?', { autoClose: 3000 })
    }

    useIsLoading(false)

  }

  const goToCheckout = () => {
    if (!cart.cartTotal()) {
      alert("You don't have any items in the cart.")
      return
    }
    toast.success('Order Complete!', { autoClose: 3000 })
    cart.clearCart()
    return router.push('/success')

  }

  return (
    <>
      <MainLayout>
        <div className="">
          <div className="text-2xl font-bold my-4">Shopping cart</div>
          <div className="grid-col lg:flex gap-5">
            <div className="">
              <ClientOnly>
                <div className="">
                  {cart.getCart().map(product => (
                    <div key={product.id} className="col-span-2">
                      <CartItem product={product}/>
                    </div>

                  ))}
                </div>
              </ClientOnly>
            </div>
            <div className="flex flex-col w-96">
              <div className="border rounded flex items-center p-2 relative">
                <div className="flex items-center gap-12 ">
                  {!isLoadingAddress ?
                    <Link href="/address" className="hover:bg-blue-700 transition bg-blue-600 text-sm absolute bottom-3 right-1 text-white p-2 rounded ">
                      {addressDetails.name ? 'Update Address' : 'Add Address'}
                    </Link>
                    : null}

                  {!isLoadingAddress && addressDetails.name ?
                    <ul className="text-sm mt-2">
                      <li>Name: {addressDetails.name}</li>
                      <li>Address: {addressDetails.address}</li>
                      <li>Zip: {addressDetails.zipcode}</li>
                      <li>City: {addressDetails.city}</li>
                      <li>Country: {addressDetails.country}</li>
                    </ul>
                    : null}

                  {isLoadingAddress ?
                    <div className="flex items-center mt-1 gap-2">
                      <AiOutlineLoading3Quarters className="animate-spin" />
                      Getting Address...
                    </div>
                    : <div></div>}
                </div>
              </div>

              <div id="GoToCheckout" className=" ">
                <ClientOnly>
                  <div className="bg-white w-full relative p-4 border gap-10 ">

                    <div>
                      <button
                        onClick={() => goToCheckout()}
                        className="flex items-center justify-center bg-blue-600  
                        text-white hover:bg-blue-700 transition p-3 rounded mt-4 absolute bottom-3 right-3"
                      >
                        Confirm
                      </button>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center justify-between mt-4 text-sm mb-1">
                        <div>Items ({cart.getCart().length})</div>
                        <div>£{(cart.cartTotal() / 100).toFixed(2)}</div>
                      </div>
                      <div className="flex items-center justify-between mb-4 text-sm">
                        <div>Shipping:</div>
                        <div>Free</div>
                      </div>

                      <div className="border-b border-gray-300" />

                      <div className="flex items-center justify-between mt-4 mb-1 text-lg font-semibold">
                        <div>Subtotal</div>
                        <div>£{(cart.cartTotal() / 100).toFixed(2)}</div>
                      </div>
                    </div>
                  </div>

                </ClientOnly>
              </div>
            </div>


          </div>

        </div>

        <SimilarProducts />

      </MainLayout>
    </>
  )
}

{/*  */ }