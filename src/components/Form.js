import { useState } from 'react';
import React from 'react';

export default function Form({
  onAddItems,
  openModal,
  setOpenModal,
  update,
  onUpdateItem,
}) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  const [updateDescription, setUpdateDescription] = useState();
  const [updateQuantity, setUpdateQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, bought: false, id: Date.now() };

    onAddItems(newItem);

    setDescription('');
    setQuantity(1);
  }

  function handleUpdate(e) {
    e.preventDefault();
    console.log('sds');
    if (!updateDescription) return;

    const newItem = {
      description: updateDescription,
      quantity: updateQuantity,
      bought: false,
      id: update.id,
    };

    onUpdateItem(newItem);

    setUpdateDescription('');
    setUpdateQuantity(1);
  }

  return (
    <div>
      <Formm
        handleSubmit={handleSubmit}
        quantity={quantity}
        setQuantity={setQuantity}
        description={description}
        setDescription={setDescription}
      />

      {openModal && (
        <Formm
          quantity={updateQuantity}
          setQuantity={setUpdateQuantity}
          description={updateDescription}
          setDescription={setUpdateDescription}
          handleSubmit={handleUpdate}
          setOpenModal={setOpenModal}
        />
      )}
    </div>
  );
}
//function Form2(
//  handleSubmit,
//  quantity,
//  setQuantity,
//  description,
//  setDescription
//) {
//  return (
//    <form onSubmit={handleSubmit}>
//      <div className="flex justify-around mt-5">
//        <h3 className="text-2xl text ">What do you want to buy ?</h3>
//        <select
//          className="py-3 px-4 pr-9 block  border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
//          value={quantity}
//          onChange={e => setQuantity(Number(e.target.value))}
//        >
//          {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
//            <option value={num} key={num}>
//              {num}
//            </option>
//          ))}
//        </select>
//        <input
//          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//          type="text"
//          placeholder="Item"
//          value={description}
//          onChange={e => setDescription(e.target.value)}
//        />
//        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
//          Add item
//        </button>
//      </div>
//    </form>
//  );
//}

function Formm({
  quantity,
  setQuantity,
  description,
  setDescription,
  handleSubmit,
  setOpenModal,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div
        className={` ${
          setOpenModal ? ' relative top-48  z-10 ' : ''
        }   shadow-lg border-2 rounded-lg bg-gray-100 shadow-gray-500 `}
      >
        <h3 className="text-2xl text-center pt-3  ">
          {' '}
          {setOpenModal ? 'Update your item' : 'What do you want to buy ?'}{' '}
        </h3>
        <div className="flex  space-x-1  mt-5 py-5">
          <select
            className="py-3 px-4 pr-9 block   rounded-xl text-sm  border-[2px] border-violet-700 focus:border-purple-700 focus:ring-purple-500  "
            value={quantity}
            onChange={e => setQuantity(Number(e.target.value))}
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
              <option
                className="border-purple-500 ring-purple-500"
                value={num}
                key={num}
              >
                {num}
              </option>
            ))}
          </select>
          <input
            className=" appearance-none border-2  border-violet-700 rounded-xl  py-2 px-4 text-gray-700 leading-tight focus:outline-none  focus:border-purple-500"
            type="text"
            placeholder="Item Name"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <button className="bg-violet-700 focus:border-purple-500  rounded-xl  font-semibold text-white py-2 px-4 border  hover:border-transparent ">
            {setOpenModal ? 'Update ' : 'Add  '}
          </button>

          {setOpenModal && (
            <button
              className="bg-violet-700 focus:border-purple-500  rounded-xl  font-semibold text-white py-2 px-4 border  hover:border-transparent mt-5"
              onClick={() => setOpenModal(false)}
            >
              cancel
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
