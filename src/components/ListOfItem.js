import { useState } from 'react';
import Item from './Item';
import React from 'react';
import Button from './Button';

export default function ListOfItem({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
  onUpdateItem,
  openModal,
  setOpenModal,
  handleOpenModal,
  handleToggleCheckAll,
  checkAll,
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
    <div className="list md:mt-2 mt-9 bg-emerald-100/30 text-lg pb-4">
      <h1 className=" py-5 text-center text-3xl font-bold text-blue-600">
        list of items{' '}
      </h1>
      <ul className="   mt-1 space-y-3  ">
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
        {sortedItems.length > 0 && (
          <select
            className="py-3 px-4 pr-9 block   rounded-xl text-sm  border-[2px] border-violet-700 focus:border-purple-700 focus:ring-purple-500 "
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
          >
            <option value="input">Sort by input order </option>
            <option value="description">Sort by description</option>
            <option value="bought">Sort by buy status</option>
          </select>
        )}
        {sortedItems.length > 0 && (
          <Button
            handleFunction={onClearList}
            text={'Clear list'}
            className={'hover:bg-red-500'}
          />
        )}

        {sortedItems.length > 0 && (
          <Button
            text={checkAll ? 'checkAll' : 'un CheckAll'}
            handleFunction={handleToggleCheckAll}
            className={'hover:bg-green-500'}
          />
        )}

        {sortedItems.length === 0 && (
          <h4 className=" font-bold text-xl text-center  mt-auto     py-6">
            You dont have any item Starting adding some items to your item list{' '}
          </h4>
        )}
      </div>
    </div>
  );
}
