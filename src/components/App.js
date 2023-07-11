import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import ListOfItem from './ListOfItem';
import Stats from './Stats';
import React from 'react';

export default function App() {
  const [items, setItems] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [update, setUpdate] = useState();
  function handleAddItems(item) {
    setItems(items => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems(items =>
      items.map(item =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    );
  }

  function handleOpenModal(item) {
    setOpenModal(true);
    console.log(item);
    setUpdate(item);
  }

  function onUpdateItem(itemToUpdate) {
    const newItem = items.filter(item => item.id === itemToUpdate.id);

    if (newItem) {
      setItems(item =>
        item.map(itema => (itema.id === newItem[0].id ? itemToUpdate : itema))
      );
    }
    setOpenModal(false);
  }
  function handleClearList() {
    const confirmed = window.confirm(' sure  to delete all items ?');

    if (confirmed) setItems([]);
  }

  return (
    <div className="w-screen    h-screen  bg-fuchsia-50 flex flex-col  ">
      <Logo />
      <Form
        onAddItems={handleAddItems}
        openModal={openModal}
        setOpenModal={setOpenModal}
        update={update}
        onUpdateItem={onUpdateItem}
      />
      <ListOfItem
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
        onUpdateItem={onUpdateItem}
        openModal={openModal}
        setOpenModal={setOpenModal}
        handleOpenModal={handleOpenModal}
      />
      <Stats items={items} />
    </div>
  );
}
