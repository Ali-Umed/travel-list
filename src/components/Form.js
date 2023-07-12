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
          setOpenModal ? ' relative top-38  z-10 mt-3 ' : ''
        }   shadow-lg border-2  rounded-lg bg-gray-100 shadow-gray-500  `}
      >
        <h3 className="text-2xl text-center pt-3  ">
          {setOpenModal ? 'Update your item' : 'What do you want to buy ?'}{' '}
        </h3>
        <div className="flex justify-center gap-y-5  flex-wrap items-center space-x-2 md:space-x-5   mt-5 py-5">
          <select
            className="py-2 px-4 pr-9 block   rounded-xl text-sm  border-[2px] border-violet-700 focus:border-purple-700 focus:ring-purple-500  "
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
            className=" w-48  appearance-none border-2  border-violet-700 rounded-xl  py-2 px-4 text-gray-700 leading-tight focus:outline-none  focus:border-purple-500"
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
              className="bg-violet-700 focus:border-purple-500  rounded-xl  font-semibold text-white py-2 px-4 border  hover:border-transparent "
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
