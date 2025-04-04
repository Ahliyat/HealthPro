import React from "react";
import styles from "./outOfStock.module.css";
const OutOfStock = () => {
  return (
    <section className={styles.outOfStockContainer}>
      <h3>Out Of Stock</h3>

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
      <table className={styles.outOfStockContent}>
        <thead>
          <tr className={styles.outOfStockLine1}>
            <th>Id</th>
            <th>Drug Name</th>
            <th>Expiry Date</th>
            <th>Manufacture Date</th>
            <th>Price</th>
            <th>QTY</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ibuprofen</td>
            <td>1939-09-27</td>
            <td>1982-07-26</td>
            <td>600.00</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Erythromycin</td>
            <td>1939-02-27</td>
            <td>1982-02-16</td>
            <td>3600.00</td>
            <td>200</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Penicillin</td>
            <td>1919-09-27</td>
            <td>1902-07-26</td>
            <td>6000.00</td>
            <td>120</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Fesulf Sulphate</td>
            <td> 2093-09-27</td>
            <td>2037-07-26</td>
            <td>700.00</td>
            <td>4000</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default OutOfStock;
