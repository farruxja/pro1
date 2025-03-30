import React, { useEffect} from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import '../style/menu.css'
import MenuHero from "../component/MenuHero";

const MenuPage = () => {
const {tableId}= useParams()


useEffect(() => {
  async function fetchCustomer() {
    try {
      let fetchData = await fetch(`https://dummyjson.com/users/${tableId}`);
      let json = await fetchData.json();
      console.log(json.data)

 
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    }
  }
  fetchCustomer();
}, [tableId]); // faqat tableId o'zgarganda ishga tushadi


  return (

    <main className="manue">
     <MenuHero/>
     <div className="cadigory">
      <NavLink></NavLink>
      <NavLink></NavLink>
      <NavLink></NavLink>
      <NavLink></NavLink>
     </div>
     

     <Outlet/>
    

      
      
     
    </main>
  );
};

export default MenuPage;