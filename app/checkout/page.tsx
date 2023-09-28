import React from "react";
import MainLayout from "../layouts/MainLayout";

import CheckoutItem from "../components/CheckoutItem";
const checkout = () => {
  const product = {
    id: 1,
    title: "hk",
    description: "lordgjglsdjgajhgdsjkgem19",
    url: "https://picsum.photos/id/7",
    price: 2500,
  };
  return (
    <MainLayout>
      <div className="mt-4 max-w-[1100px] mx-auto">
        <div className="text-2xl font-bold mt-4 mb-4">Checkout</div>
        <div className="relative flex flex-col md:flex-row items-baseline gap-4 justify-between mx-auto w-full">
          <div className="w-[65%]">
            <div className="bg-white rounded p-4 border">
              <div className="text-xl font-semibold mb-2">
                <div>
                  <ul className="text-sm mt-2">
                    <li>name:test</li>
                    <li>address:test</li>
                    <li>zipcode:test</li>
                    <li>city:test</li>
                    <li>country:test</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white roundeed-lg mt-4">
                <CheckoutItem key={product.id} product={product} />
              </div>
            </div>
          </div>
          <div className="relative -top-[7px] w-[35%] border rounded-lg">
              <div className="p-4">
                <div className="flex items-baseline justify-between text-sm mb-1">
                  <div>Items 3</div>
                  <div>£{(2999 / 100).toFixed(2)}</div>
                </div>
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div>Shipping:</div>
                  <div>Free</div>
                </div>

                <div className="border-t" />

                <div className="flex items-center justify-between my-4">
                  <div className="font-semibold">Order total</div>
                  <div className="text-2xl font-semibold">
                    £{(2999 / 100).toFixed(2)}
                  </div>
                </div>
                <form>
                    <div 
                        className="border border-gray-500 p-2 rounded-sm" 
                        id="card-element" 
                    />

                    <p 
                        id="card-error" 
                        role="alert" 
                        className="text-red-700 text-center font-semibold relative top-2" 
                    />

                    <button 
                        type="submit"
                        className="mt-4 bg-blue-600 text-lg w-full text-white font-semibold p-3 rounded-full"
                    >
                        <div>Confirm and pay</div>
                    </button>
                </form>
              </div>
            </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default checkout;
