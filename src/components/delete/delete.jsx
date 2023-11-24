import React from "react";
import styles from "./delete.module.css";
function Delete({id}) {
  const deleteProduct = () => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(console.log);
  };
  return (
    <div>
      <button 
      className={styles.deleteBtn}
      onClick={deleteProduct}
      >
        Delete
        </button>
    </div>
  );
}

export default Delete;
