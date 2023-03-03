
import {useState} from "react";
import { useEffect } from "react";
import useOnline from "../util/useOnline";


import { CARDS_URL } from "../components/config";
const useRestaurantCard =  ( ) =>{
    
const [allRestaurants, setAllRestaurants]=useState([]);
     const [filteredRestaurants,setFilteredRestaurants] =useState([]);

useEffect(
    //API CALL HAPPENS INSIDE THE useeffect 
    () => {
      getRestaurants();
    },[]) ;
   


   async function getRestaurants(){
    const data = await fetch(CARDS_URL);
    const json=await data.json();
    console.log(json);
   // setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
   setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
   setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards); // we are mainting this copy coz the first time we will show all restaurants 
  }

  const isOnline = useOnline();
    if (!isOnline){
      return <h1>  PLEASE CHECK YOUR INTERNET CONNECTION !!!</h1>
    
    }

  return allRestaurants,filteredRestaurants;

}

export default useRestaurantCard;