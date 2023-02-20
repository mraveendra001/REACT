import { useState,useEffect,useContext } from "react";
import {restaurantList} from "./config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData} from "../util/helper";  //helper file from util makes body.js more readable , reusable , maintainalbe , testable , modularity 
import useRestaurantCard from "../util/useRestaurantCard";
import useOnline from "../util/useOnline";
import UserContext from "../util/UserContext";





const Body = () => {
     //const searchTxt="KFC";  //everytime a loal variableis created ,state is maintined

     //we will use state hook 
     //const [restaurants,setRestaurants]=useState([]);
     const isOnline = useOnline();
     const [allRestaurants, setAllRestaurants]=useState([]);
    const [filteredRestaurants,setFilteredRestaurants] =useState([]);
     const [searchText,setSearchText]=useState("");//this is a local state variable , kfc is default variable 
     const {user,setUser}=useContext(UserContext);
     
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


  
    if (!isOnline){
      return <h1>  PLEASE CHECK YOUR INTERNET CONNECTION !!!</h1>
    
    }
    console.log(isOnline);





    //console.log("render");
    
   //conditional rendering  - rendering before loading the actual restaurant data , this is done when we create the shimmer ui (the empty cards that load before renderig the actual data)
   // if restaurant => empty then load shimmer ui
   // if restaurant => has data then load the actual data



  //const  allRestaurants = useRestaurantCard();
  //const  filteredRestaurants = useRestaurantCard();
//how to avoid rendering the component , early return 
if (!allRestaurants) return null;

if (filteredRestaurants?.length ==0 ) 
   return 
   
  

   <h1> Uh-oh no restaurant found that matches your fiter !</h1>;
   //return <Shimmer/>;

  // const searchbtnCSS={backgroundColor : "white"}   //this is like we are writing jsx for styles
    return (allRestaurants.length == 0 )? <Shimmer/> : (
        <>
           
        <div className="p-2 my-2">
          <input type="text" 
                 className= "py-2 px-4 m-4 w-7/12 rounded-full shadow-lg focus:bg-green-100 justify-center" 
                 placeholder="search" 
                 value={searchText}
                 onChange ={(e) => {
                    setSearchText(e.target.value);
                }}  //*e means event , when the input is chaged then this will be called
            />
            
          <button className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 m-4 rounded-full shadow-2xl"
          //style={searchbtnCSS}// we can use the searchbtn here 
          //or u can write like below
          //style = {{
         //backgroundColor : "white"
        //  }}  //dont panik if you see this syntax it is just like you are considering {} jsx object first inside the curly braces , then 
         //normal curlybraces 
         //but this inline css is not a good practise to to write coz we cant resuse , and its harcoded and so on
         //its a heavy job 



                 onClick={() => {
                   //need to filter the data
                   const data = filterData(searchText, allRestaurants);
                   // update the state - restaurants
                  setFilteredRestaurants(data);
                 }}
               > Search
        </button>
        <input value={user.name} onChange = {e => setUser({
          ... user,
          name:e.target.value,
          
        }) 
        }>
        </input>
        <input value={user.email} onChange = {e => setUser({
          ...user,
          email: e.target.value,
        }) 
        }>
        </input>
        </div>
        
        <div className=" flex flex-wrap">
            {  filteredRestaurants.map((restaurant) => {
              /* write logic if no restaurant found here with the shimmer how it will load  */ 

          
                  return ( 
                 <Link to= {"/restaurant/"+ restaurant.data.id}
                 key={restaurant.data.id}
                 >
                  <RestaurantCard 
                 {...restaurant.data} user={user} />
                  </Link>
                  ) ;      
                // this is map function  restuarantlist contains aray of data from api data // restaurant is an obj     
                        
                        
              
        })}   
      
         
        </div>
        </>
        );
        
            };
export default Body;