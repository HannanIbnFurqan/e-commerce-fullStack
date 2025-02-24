import React from 'react';
import { removeCart } from './utility/store/CartSlice';
import { useDispatch } from 'react-redux';
function CartRow({ obj, quantity }) {
  const { thumbnail, title, price, rating, brand, id } = obj;

  const dispatch = useDispatch();
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={thumbnail} alt={title} />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">{brand}</div>
          </div>
        </div>
      </td>
      <td>{rating}</td>
      <td>${price}</td>
      <td>
        {quantity}
      </td>
      <td>
        <button onClick={()=> dispatch(removeCart(id))}>remove</button>
      </td>
    </tr>
  );
}

export default CartRow;
