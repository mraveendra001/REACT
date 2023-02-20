import { useState } from "react";

const IMG_CDN_URL="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

function App (){
    const [data,setData]=useState([]);

    useEffect (() =>{

        
    })
}

const RestaurantCard = ({name,cuisines,cloudinaryImageId,lastMileTravelString}) => {
    //console.log(props);
   // const {name,cuisines,cloudinaryImageId,lastMileTravelString}=restaurant.data;
 
         return(
             
             <div className="w-[230px] h-[300px] p-2 m-2 shadow-lg hover:scale-110 transition-all duration-500 cursor-pointer" >
             
                 <img src={IMG_CDN_URL+cloudinaryImageId} />
                 <h2 className="font-bold text-xl">{name}</h2>
                 <h3>{cuisines.join(", ")}</h3>
                 <h4>{lastMileTravelString}</h4>
             </div>
         
         );     
         
         }
export default RestaurantCard;