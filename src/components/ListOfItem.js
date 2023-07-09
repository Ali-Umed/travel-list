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
  handleOpenModal
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
      <ul className="flex items-center  flex-wrap space-x-16  mt-4  justify-center">
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
          className="py-3 px-4 pr-9   border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input order </option>
          <option value="description">Sort by description</option>
          <option value="bought">Sort by bought status</option>
        </select>
        <button
          className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
          onClick={onClearList}
        >
          {' '}
          Clear list{' '}
        </button>
      </div>
    </div>
  );
}
