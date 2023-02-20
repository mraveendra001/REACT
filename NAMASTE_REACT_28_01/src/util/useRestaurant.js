import { useState , useEffect} from "react" ;
import { MENU_URL } from "../components/config";
import useOnline from "../util/useOnline";



const useRestaurant =  ( id  ) =>{
    

    const [restaurant, setRestaurant]= useState(null);

    //get data from API 

 //get the restaurant data
 useEffect(() =>{
    getRestaurantInfo();
},[]);


async function getRestaurantInfo(){
    const data = await fetch(MENU_URL+id);
     const json= await data.json();
     //console.log(json.data);
     setRestaurant(json.data);
     console.log(id);
}

const isOnline = useOnline();
    if (!isOnline){
      return <h1>  PLEASE CHECK YOUR INTERNET CONNECTION !!!</h1>
    
    }

 // return the restaurant data
 return restaurant;

}

export default useRestaurant;