import React from 'react';

export default function Item({
  item,
  onDeleteItem,
  onToggleItem,
  handleOpenModal,
}) {
  return (
    <li className="list-disc ml-7  marker:text-violet-700 text-2xl">
      <div>
        <input
          className="accent-violet-700"
          type="checkbox"
          value={item.bought}
          onChange={() => onToggleItem(item.id)}
        />
        <span
          className={` ${
            item.bought ? 'decoration-violet-700 line-through' : ''
          } `}
          onDoubleClick={() => handleOpenModal(item)}
        >
          {item.quantity > 1 && ' x'}
          {item.quantity} {item.description}{' '}
        </span>
        <button className="text-lg  " onClick={() => onDeleteItem(item.id)}>
          ❌
        </button>
      </div>
    </li>
  );
}
