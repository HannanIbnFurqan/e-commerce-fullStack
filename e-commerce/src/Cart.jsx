import React from 'react'
import { useSelector } from 'react-redux'
import CartRow from './CartRow';
function Cart() {
  const CartItems = useSelector((store)=> store.cart.items)
  console.log("cartIems = ",CartItems);
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Rating</th>
        <th>Quantity</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    <CartRow></CartRow>
    </tbody>
  </table>
</div>
  )
}

export default Cart