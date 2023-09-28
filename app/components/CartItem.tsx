import { useCart } from "../context/cart";
import { toast } from "react-toastify";

interface Product {
  id: number;
  title: string;
  price: number;
  url: string;
  description: string;
}

interface CartItemProps {
  product: Product;
}

export default function CartItem({ product }: CartItemProps) {
  const cart = useCart();

  const removeItemFromCart = () => {
    let res = confirm(`Are you sure you want to remove this? "${product.title}"`);
    if (res) {
      cart.removeFromCart(product);
      toast.info('Removed from cart', { autoClose: 3000 });
    }
  };

  return (
    <>
      <div className="flex justify-between items-center border w-full p-6 relative">
        <img alt="image" src={product?.url+'/150'} className="rounded-md w-[150px] h-[150px]" />

        <div className="overflow-hidden pl-2 w-full ml-auto ">
          <div className="flex items-center justify-between w-full ">
            <div className="flex items-center font-semibold justify-between w-[400px] text-[16px] underline">
              {product?.title}
            </div>
            <div className="font-bold text-lg">
              £{(product?.price / 100).toFixed(2)}
            </div>
          </div>

          <div className="font-semibold mt-2">
            NEW
          </div>

          <div className="text-sm mt-2">
            {product?.description.substring(0, 150)}...
          </div>

          <div className="">
            <button onClick={() => removeItemFromCart()} className="text-white py-3 px-4
             right-2 bottom-2 hover:bg-blue-700 transition rounded absolute bg-blue-600">
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
