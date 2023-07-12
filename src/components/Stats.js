import React from 'react';

export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className=" bg-violet-700 text-xl text-yellow-50 text-center mt-auto  relative bottom-0   h-auto  py-6  ">
        <em>Start adding some items to your Item list </em>
      </p>
    );

  const numItems = items.length;
  const numBought = items.filter(item => item.bought).length;
  const percentage = Math.round((numBought / numItems) * 100);

  return (
    <footer className="  bg-violet-700 text-xl text-yellow-50 text-center  relative  bottom-0 mt-auto     py-6   ">
      <em>
        {percentage === 100
          ? 'You buy everything that you need to buy !  '
          : `  You have ${numItems} items on your list, and you already buy ${numBought} (${percentage}%)`}
      </em>
    </footer>
  );
}
