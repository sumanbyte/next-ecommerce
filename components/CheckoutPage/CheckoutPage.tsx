import Image from "next/image";
import {
  useDeleteFromCartMutation,
  useShowCartsQuery,
  useUpdateCartMutation,
} from "@/redux/apis/cartApiSlice";
import { MdDelete } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa6";

import { useSelector } from "react-redux";

const CheckoutPage: React.FC = () => {
  const { data: cartItems, isLoading, error } = useShowCartsQuery(undefined);
  const navbarState = useSelector((state: any) => state.navbar);
  console.log(navbarState);

  const [updateCart] = useUpdateCartMutation();
  const [deleteFromCart] = useDeleteFromCartMutation();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading carts</div>;

  const handleIncreaseQuantity = (productId: any) => {
    updateCart({ productId, quantity: "INCREASE_QUANTITY" });
  };

  const handleDecreaseQuantity = (productId: any) => {
    updateCart({ productId, quantity: "DECREASE_QUANTITY" });
  };

  return (
    <div className="max-w-7xl m-auto">
      <div className="my-10 px-2 md:px-4">
        <h1 className="py-5 text-3xl">
          Checkout <span className="text-primary-600">Page</span>
        </h1>
        <div className="flex gap-2 mb-4">
          <div className="flex gap-2 items-center">
            <div className="bg-primary-700 px-2 py-1 rounded-md hover:bg-primary-800 transition cursor-pointer duration-200">
              <FaPlus className=" text-xs text-white " />
            </div>
            <p>Select All</p>
          </div>
          <div className="flex gap-4">
            <select className="pl-5 rounded-lg py-0.5" defaultValue={""}>
              <option value="" disabled className="disabled:bg-gray-300">
                Choose Option
              </option>
              <option value="">Delete Items</option>
            </select>
            <button className="px-4 bg-blue-500 transition rounded-lg text-white hover:bg-blue-600">
              Apply
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="bg-white grid grid-cols-[2fr_1fr_1fr_1fr_1fr] justify-items-center py-5 mb-2">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
            <p>Action</p>
          </div>
          {cartItems?.map((cartItem: any) => (
            <div
              key={cartItem._id}
              className="bg-white grid grid-cols-[2fr_1fr_1fr_1fr_1fr] justify-items-center items-center py-5 text-center"
            >
              <div className="grid grid-col-checkout w-full justify-items-center">
                <Image
                  className="w-8 h-8 inline-block"
                  src={cartItem.productId.image}
                  width={50}
                  height={30}
                  alt={cartItem.productId.title}
                />
                <p className="w-full text-left">{cartItem.productId.title}</p>
              </div>
              <div>
                <p>$ {cartItem.productId.price}</p>
              </div>
              <div className="flex items-center gap-5">
                <FaMinus
                  color="black"
                  onClick={() => handleIncreaseQuantity(cartItem.productId._id)}
                  className="rounded-sm"
                />
                <p className="text-lg">{cartItem.quantity}</p>
                <FaPlus
                  color="black"
                  onClick={() => handleIncreaseQuantity(cartItem.productId._id)}
                  className=" rounded-sm"
                />
              </div>
              <div>
                <p>
                  $ {(cartItem.productId.price * cartItem.quantity).toFixed(2)}
                </p>
              </div>
              <div onClick={() => deleteFromCart({ cartId: cartItem._id })}>
                <MdDelete
                  className="hover:text-red-600 duration-300 transition-all cursor-pointer"
                  size={20}
                />
              </div>
            </div>
          ))}
          <div className="bg-white grid grid-cols-[2fr_1fr_1fr_1fr_1fr] justify-items-center mt-2 py-5 mb-5">
            <p>Total</p>
            <p></p>
            <p></p>
            <p>
              ${" "}
              {cartItems
                ?.reduce((acc: number, cartItem: any) => {
                  return acc + cartItem.productId.price * cartItem.quantity;
                }, 0)
                .toFixed(2)}
            </p>
            <p></p>
          </div>
        </div>
        <div className="block lg:hidden bg-white">
          {cartItems.map((cartItem: any) => {
            return (
              <div key={cartItem._id} className="grid grid-cols-[1fr_8fr_2fr]">
                <div className="flex items-center justify-center">
                  <Image
                    className="object-contain"
                    src={cartItem.productId.image}
                    width={50}
                    height={50}
                    alt="item image"
                  />
                </div>
                <div>
                  <h5 className="font-medium">{cartItem.productId.title}</h5>
                  <p className="font-semibold">${cartItem.productId.price}</p>
                </div>
                <div className="flex justify-center items-center gap-5">
                  <FaMinus
                    color="black"
                    onClick={() =>
                      handleIncreaseQuantity(cartItem.productId._id)
                    }
                    className="rounded-sm"
                  />
                  <p className="text-lg">{cartItem.quantity}</p>
                  <FaPlus
                    color="black"
                    onClick={() =>
                      handleIncreaseQuantity(cartItem.productId._id)
                    }
                    className=" rounded-sm"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
