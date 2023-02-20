import { useState,useEffect } from "react";
import {restaurantList} from "./config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


function filterData(searchText, restaurants) {
      const filterData = restaurants.filter((restaurant) =>
        restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
      );
    
      return filterData;
}




const Body = () => {
     //const searchTxt="KFC";  //everytime a loal variableis created ,state is maintined
     //we will use state hook 
     //const [restaurants,setRestaurants]=useState([]);
     const [allRestaurants, setAllRestaurants]=useState([]);
     const [filteredRestaurants,setFilteredRestaurants] =useState([]);
     const [searchText,setSearchText]=useState("");//this is a local state variable , kfc is default variable 
     
     
     // if dependency array is empty , it will called once after render
     // if dep array has searchText , it will becalled once after render + everytime searchtext is called
     //useEffect(() => {console.log("render")} , [searchText]) ;//()=>{} is a callback function  , which called at every re render , 
     //suppose i want to call useEffect when searchText changes then we add searchText inside the dependency array
     // thiswill also take dependency arry
     useEffect(
      //API CALL HAPPENS INSIDE THE useeffect 
      () => {
        getRestaurants();
      },[]) ;
     

     async function getRestaurants(){
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2798752&lng=72.88551629999999&page_type=DESKTOP_WEB_LISTING");
      const json=await data.json();
      console.log(json);
     // setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
     setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
     setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards); // we are mainting this copy coz the first time we will show all restaurants 
    }

    console.log("render");
    
   //conditional rendering  - rendering before loading the actual restaurant data , this is done when we create the shimmer ui (the empty cards that load before renderig the actual data)
   // if restaurant => empty then load shimmer ui
   // if restaurant => has data then load the actual data

//how to avoid rendering the component , early return 
if (!allRestaurants) return null;

if (filteredRestaurants?.length ==0 ) 
   //return <h1> Uh-oh no restaurant found that matches your fiter !</h1>;
   return <Shimmer/>;


    return (allRestaurants.length == 0 )? <Shimmer/> : (
        <>
        <div className="search-container">
          <input type="text" 
                 className="search-input" 
                 placeholder="search" 
                 value={searchText}
                 onChange ={(e) => {
                    setSearchText(e.target.value);
                }}  //*e means event , when the input is chaged then this will be called
            />
            
          <button 
        className="search-btn"
                 onClick={() => {
                   //need to filter the data
                   const data = filterData(searchText, allRestaurants);
                   // update the state - restaurants
                  setFilteredRestaurants(data);
                 }}
               >

                Search
        </button>
        </div>
        
        <div className="restaurant-list">
            {  filteredRestaurants.map((restaurant) => {
              /* write logic if no restaurant found here with the shimmer how it will load  */ 

          
                  return ( 
                 <Link to= {"/restaurant/"+ restaurant.data.id}
                 key={restaurant.data.id}
                 >
                  <RestaurantCard 
                 {...restaurant.data}  />
                  </Link>
                  ) ;      
                // this is map function  restuarantlist contains aray of data from api data // restaurant is an obj     
                        
                        
              
        })}   
      
         
        </div>
        </>
        );
        
            };
export default Body;