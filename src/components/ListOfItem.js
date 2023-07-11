import { useState } from 'react';
import Item from './Item';
import React from 'react';

export default function ListOfItem({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
  onUpdateItem,
  openModal,
  setOpenModal,
  handleOpenModal,
}) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  if (sortBy === 'input') sortedItems = items;

  if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === 'bought')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.bought) - Number(b.bought));

  return (
    <div className="list mt-9 bg-emerald-100/30 text-lg pb-4">
      <h1 className="text-center text-2xl font-bold text-blue-600">
        list of items{' '}
      </h1>
      <ul className="   mt-4 space-y-2  ">
        {sortedItems.map(item => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
            onUpdateItem={onUpdateItem}
            openModal={openModal}
            setOpenModal={setOpenModal}
            handleOpenModal={handleOpenModal}
          />
        ))}
      </ul>

      <div className="flex justify-evenly mt-8">
        <select
          className="py-3 px-4 pr-9 block   rounded-xl text-sm  border-[2px] border-violet-700 focus:border-purple-700 focus:ring-purple-500 "
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input order </option>
          <option value="description">Sort by description</option>
          <option value="bought">Sort by bought status</option>
        </select>
        <button
          className="bg-violet-700  focus:border-purple-500  rounded-xl  font-semibold text-white py-2 px-4 border  hover:border-transparent hover:bg-red-500"
          onClick={onClearList}
        >
          {' '}
          Clear list{' '}
        </button>
      </div>
    </div>
  );
}
