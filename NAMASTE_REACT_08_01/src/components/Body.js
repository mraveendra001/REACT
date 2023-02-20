import { useState } from "react";
import {restaurantList} from "./config";
import RestaurantCard from "./RestaurantCard";


function filterData(searchText, restaurants) {
      const filterData = restaurants.filter((restaurant) =>
        restaurant.data.name.includes(searchText)
      );
    
      return filterData;
}


const Body = () => {
     //const searchTxt="KFC";  //everytime a loal variableis created ,state is maintined
     //we will use state hook 
     const [restaurants,setRestaurants]=useState(restaurantList);
     const [searchText,setSearchText]=useState("");//this is a local state variable , kfc is default variable 

     
     
     
     // useState() function returns a array and the first element of the array is variable name
     //searchText will be local state variable 
    //what is state ?
   // everytime a loal variable is created ,state is maintined , state is created
    //what is hook ?
     //just a function , useState() is a hook there are different types of hook , they provide the functionality 
    //what is use state ?
     //state variables are created using useState() const searchTxt=useState();
     //why do we need state variable when we have local variable ?
     //suppose we have localc variable let constant=10; but react will not know re render when this value will be updated, there by we use state varible
     //inorder for react to be in sync with ui we use local variable 
     //const searchClicked=false; let us do in react below 
    

    return (
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
                   const data = filterData(searchText, restaurants);
                   // update the state - restaurants
                  setRestaurants(data);
                 }}
               >

                Search
        </button>
        </div>
        
        <div className="restaurant-list">
            {  restaurants.map((restaurant) => {
                  return ( 
                  <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                  ) ;      
                // this is map function  restuarantlist contains aray of data from api data // restaurant is an obj     
                        
                        
              
        })}   
      
         
        </div>
        </>
        );
        
            };
export default Body;