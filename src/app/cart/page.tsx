'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

const Cart = () => {

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  //--=== GETTING VALUE FROM LOCALSTORAGE ===--//
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(cart);
  }, []);

  //--=== UPDATE LOCAL STORAGE AND DISPATCH EVENT ===--//
  const updateLocalStorage = (updatedCart: CartItem[]) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    window.dispatchEvent(new CustomEvent('cartUpdated')); // Real-time cart update
  };

  //--=== QUANTITY INCREMENT & DECREMENT ===--//
  const updateQuantity = (id: number, increment: boolean) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + (increment ? 1 : -1) }
        : item
    ).filter((item) => item.quantity > 0);

    updateLocalStorage(updatedCart);
  };

  //--=== REMOVE ITEM FROM CART ===--//
  const removeItem = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    updateLocalStorage(updatedCart);
  };

  //--=== TOTAL AMOUNT ===--//
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  return (
    <div>

      <div className="flex justify-center items-center px-[20px] sm:px-[0] py-[30px] lg:py[0] h-auto w-[100%]">

        {/*----===== CART =====----*/}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/*----===== PRODUCTS =====----*/}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Bag</h2>
            <div className="space-y-6">

              {cartItems.map((item) => (
                <div key={item.id} className="flex items-start border-b border-gray-200 pb-6">

                  {/*----===== IMAGE =====----*/}
                  <div className="w-24 h-[150px] flex-shrink-0">
                    <Image src={item.image} alt={item.name} width={100} height={100} className="rounded-md h-[150px]"/>
                  </div>

                  {/*----===== QUANTITY & NAME =====----*/}
                  <div className="flex-1 px-4">
                    <h3 className="text-[12px] sm:text-lg font-medium text-gray-800">{item.name}</h3>
                    <div className="mb-[10px]">
                      <div className="text-sm text-gray-500 flex gap-[5px]">
                        <p>Quantity:</p>
                        <div className="flex gap-[5px]">
                          <p className="cursor-pointer mt-[-2px] text-[25px]" onClick={() => updateQuantity(item.id, false)}>-</p>
                          <p>{item.quantity}</p>
                          <p className="cursor-pointer text-[15px]" onClick={() => updateQuantity(item.id, true)}>+</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-[10px] text-gray-600">
                      <i className="bx bx-trash cursor-pointer" onClick={() => removeItem(item.id)}></i>
                    </div>
                  </div>

                  {/*----===== PRICE =====----*/}
                  <div className="text-right">
                    <p className="text-[10px] sm:text-sm font-medium text-gray-800">${item.price}</p>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/*----===== TOTAL SUMMARY =====----*/}
          <div className="p-6">

            {/*----===== SUMMARY =====----*/}
            <h3 className="text-xl font-semibold text-gray-800 mb-4" data-aos="fade-right">Summary</h3>
            <div className="space-y-4" data-aos="zoom-in">

              {/*----===== SUBTOTAL =====----*/}
              <div className="flex justify-between text-sm text-gray-600">
                <p>Subtotal</p>
                <p>${total}</p>
              </div>

              {/*----===== DELIVERY =====----*/}
              <div className="flex flex-col justify-between text-sm text-gray-600">
                <p>Estimated Delivery & Handling</p>
                <p>Free</p>
              </div>

              {/*----===== TOTAL BILL =====----*/}
              <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-medium text-gray-800">
                <p>Total</p>
                <p>${total}</p>
              </div>
            </div>

            {/*----===== CHECKOUT BUTTON =====----*/}
            <button className="mt-6 w-full bg-black text-white text-center py-3 rounded-full font-medium">Checkout</button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Cart;