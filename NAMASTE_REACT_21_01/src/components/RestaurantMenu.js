import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./config";
import Shimmer from "./Shimmer";


const RestaurantMenu = () => {

    const params=useParams();
    const {id}= params; //de structuring of id
    //we can destructure like this as well  const {id}=useParams();
//console.log(params);
const  [restaurant,setRestaurant] = useState(null);

useEffect(() =>{
    getRestaurantInfo();
},[]);


async function getRestaurantInfo(){
    const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=19.2798752&lng=72.88551629999999&menuId="+id);
     const json= await data.json();
     //console.log(json.data);
     setRestaurant(json.data);
     console.log(id);
}

return  (!restaurant) ? ( <Shimmer/> ): (
//hereu can do early return or shimmer   , if use null in useState then null will be rendered initially to we can make it wait by adding shimmer

//how to read a dynamic URL params

   
        <div className="menu">
        <div>
                <h1>Restaurant Id : {id}</h1>  {/* de structuring of id */}
                
                <h2>{restaurant.name}</h2>
                <img src = {IMG_CDN_URL+restaurant.cloudinaryImageId }/>
                <h3>{restaurant.area}</h3>
                <h3>{restaurant.city}</h3>
                <h3>{restaurant.avgRating} stars</h3>
                <h3>{restaurant.costForTwoMsg}</h3>
        </div>
        <div>
            <h1>Menu</h1>
            <ul>{
              Object.values(restaurant?.menu?.items).map((item) => <li key={item.id}>{item.name}</li>) 
                }</ul>

        </div>
        </div>
        
    );
};
export default RestaurantMenu;