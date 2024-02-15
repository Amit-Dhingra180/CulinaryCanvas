import React from 'react';

const Item = ({ item, onIncrement, onDecrement }) => {
  return (
    <div key={item._id}>
      <span>{item.name} : {item.quantity}</span>
      <span>{item.image} {item.price} {item.class}</span>
      <button onClick={() => onIncrement(item._id)}>+</button>
      <button onClick={() => onDecrement(item._id)}>-</button>
    </div>
  );
};

export default Item;