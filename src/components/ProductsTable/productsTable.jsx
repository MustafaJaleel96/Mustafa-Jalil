"use client";

import { useEffect, useState } from "react";
import { Container } from "../container/container";
import styles from "./productsTable.module.css";
import { useAppStore } from "@/store";
import Delete from "../delete/delete";
import { IoSearch } from "react-icons/io5";

export const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("")
  const [value,setValue]= useState("")
  const { setIsOpen, setId, setTitle, setDescription, setPrice } =
    useAppStore();
//still
  const getProducts = () => {
    fetch(`https://dummyjson.com/products/search?q=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  };

  useEffect(() => {
    getProducts();
  }, [search]);
const handelInputChange =()=>{
  setSearch(value)
}
  return (
    <div className={styles.table}>
      <Container>
        <div className={styles.top}>
          <div className={styles.search}>
          <button 
           onClick={handelInputChange}
          >
          <IoSearch />
          </button>
          <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Search . . . "
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setSearch(value);
                }
              }}
            />
          </div>
          <div className={styles.addNew}>
            <button
              onClick={() => {
                setId(null);
                setTitle("");
                setDescription("");
                setIsOpen(true);
              }}
            >
              Add New
            </button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((el, i) => (
              <tr key={i}>
                <td>{el.id}</td>
                <td>{el.title}</td>
                <td>
                  <b>{el.price} $</b>
                </td>
                <td className={styles.actions}>
                  <button
                    className={styles.editBtn}
                    onClick={() => {
                      setId(el.id);
                      setTitle(el.title);
                      setDescription(el.description);
                      setPrice(el.price);
                      setIsOpen(true);
                    }}
                  >
                    Edit
                  </button>
                  <Delete id={el.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
};
