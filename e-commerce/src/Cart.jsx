import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearCart, sortAcsending, sortDesending } from './utility/store/CartSlice';
import CartRow from './CartRow';

function Cart() {
  const CartItems = useSelector((store) => store.cart.items);
  // console.log("Cart Items = ", CartItems);
  const dispatch = useDispatch()

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* Table Head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Rating</th>
            <th><span onClick={()=> dispatch(sortAcsending())}>🔼</span>Price <span onClick={()=> dispatch(sortDesending())}>🔽</span></th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {CartItems.map((cartObj) => (
            <CartRow key={cartObj.objData.id} obj={cartObj.objData} quantity={cartObj.quantity} />
          ))}
        </tbody>
      </table>
      <div>
        <button  onClick={()=> dispatch(clearCart())}>Clear Cart</button>
      </div>
    </div>
  );
}

export default Cart;
