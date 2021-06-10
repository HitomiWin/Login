import { useState, useContext } from "react";
import { ListContext } from "../contexts/ListContext";
import styles from "../css/Table.module.css";

export default function PersonsList() {
  const { persons, message } = useContext(ListContext);

  const renderTable = () => {
    const rows = persons.map((person) => (
      <tr key={person.personId}>
        <td>{person.personId}</td>
        <td>{person.firstName}</td>
        <td>{person.lastName}</td>
        <td>{person.email}</td>
        <td>{person.age}</td>
      </tr>
    ));
    return (
      <div className={styles.info}>
      <h3>Personal Information</h3>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      </div>
    );
  };

  return <div className={styles.listContainer}>{persons && renderTable()}</div>;
}
