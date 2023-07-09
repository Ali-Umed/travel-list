import React from 'react';

export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className=" bg-blue-900 text-xl text-yellow-50 text-center mt-auto  h-16  pt-4  ">
        <em>Start adding some items to your Item list </em>
      </p>
    );

  const numItems = items.length;
  const numBought = items.filter(item => item.bought).length;
  const percentage = Math.round((numBought / numItems) * 100);

  return (
    <footer className=" bg-blue-900 text-xl text-yellow-50 text-center  mt-auto   h-16  pt-4    ">
      <em>
        {percentage === 100
          ? 'You buy everything that you neeed to buy !  '
          : `  You have ${numItems} items on your list, and you already buy ${numBought} (${percentage}%)`}
      </em>
    </footer>
  );
}
