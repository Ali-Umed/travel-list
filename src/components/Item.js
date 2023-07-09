import React from 'react';

export default function Item({
  item,
  onDeleteItem,
  onToggleItem,
  handleOpenModal,
}) {
  return (
    <li>
      <div>
        <input
          type="checkbox"
          value={item.bought}
          onChange={() => onToggleItem(item.id)}
        />
        <span
          onDoubleClick={() => handleOpenModal(item)}
          style={item.bought ? { textDecoration: 'line-through' } : {}}
        >
          {item.quantity} {item.description}{' '}
        </span>
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
      </div>
    </li>
  );
}
