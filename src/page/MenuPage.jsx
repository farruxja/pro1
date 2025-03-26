import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const MenuPage = () => {
const {tableId}= useParams()
const [customer, setCostomer]= useState(null)

useEffect(() => {
  async function fetchCustomer() {
    try {
      let fetchData = await fetch(`https://dummyjson.com/users/${tableId}`);
      let json = await fetchData.json();
      setCostomer(json);
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    }
  }
  fetchCustomer();
}, [tableId]); // faqat tableId o'zgarganda ishga tushadi


  return (

    <div>
      <h1>Menu Page {tableId}</h1>
      <p>{customer?.id}</p>
      <p>{customer?.firstName}</p>
     
    </div>
  );
};

export default MenuPage;