"use client";

import { useAppStore } from "@/store";
import { Modal } from "../Modal/modal";
import styles from "./form.module.css";

export const From = () => {
  const {
    isOpen,
    setIsOpen,
    id,
    title,
    setTitle,
    setId,
    description,
    setDescription,
    price,
    setPrice,
  } = useAppStore();

  const update = () => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        price,
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  };

  const add = () => {
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        price,
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  };

  const handleSave = () => {
    if (id) {
      update();
      alert("the product has been updated");
    } else {
      add();
      alert("New product has been added");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <h4>Edit Modal</h4>
      <button
        onClick={() => {
          setTitle("");
          setDescription("");
          setPrice("");
          setId(null);
          setIsOpen(false);
        }}
      >
        X
      </button>
      <div className={styles.input}>
        <p>Title</p>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className={styles.input}>
        <p>Description</p>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className={styles.input}>
        <p>Price</p>
        <input value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <br />
      <button
        onClick={() => {
          handleSave();
          setIsOpen(false);
        }}
      >
        Save
      </button>
    </Modal>
  );
};
